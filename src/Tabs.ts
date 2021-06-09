import {
  TabsCtor      as I_TabsCtor,
  Tabs          as I_Tabs,
  TabsCtorCfg   as I_TabsCtorCfg,
  TabsCfg       as I_TabsCfg,
  TabsPluginCfg as I_TabsPluginCfg,
} from "./types/Tabs";
import {
  Tab as I_Tab
} from "./types/Tab";
import {
  Plugin      as I_Plugin,
  PluginCtor  as I_PluginCtor
} from "./types/Plugin";
import { Helper as I_Helper } from "./types/Helper";

import EventEmitter from "@xaro/event-emitter";
import _, { MicroDOM } from "@xaro/micro-dom";
import deepmerge from "@xaro/deepmerge";
import { isObject } from "./helpers";
import Plugin from "./Plugin";
import Tab from "./Tab";
import Helper from "./Helper";

const defaultClasses = {
  transition: 'x-tabs--transition',
  animation:  'x-tabs--animation',
  tabs: {
    wrapper:  'x-tabs__tabs',
    tab:      'x-tabs__tab',
    active:   'x-tabs__tab--active',

    transition: {
      hide: {
        from:   'x-tab--t-hide-from',
        active: 'x-tab--t-hide-active',
        to:     'x-tab--t-hide-to',
      },
      show: {
        from:   'x-tab--t-show-from',
        active: 'x-tab--t-show-active',
        to:     'x-tab--t-show-to',
      },
    },

    animation: {
      hide: {
        from:   'x-tab--a-hide-from',
        active: 'x-tab--a-hide-active',
        to:     'x-tab--a-hide-to',
      },
      show: {
        from:   'x-tab--a-show-from',
        active: 'x-tab--a-show-active',
        to:     'x-tab--a-show-to',
      },
    }
  },
};

const Tabs: I_TabsCtor = class implements I_Tabs {
  static instances: I_Tabs[] = [];

  config:         I_TabsCfg;
  emitter:        EventEmitter;
  tabs:           I_Tab[] = [];
  helper:         I_Helper;
  plugins:        I_Plugin[] = [];

  constructor(config: I_TabsCtorCfg) {
    this.emitter = new EventEmitter(config.on);

    this.config = {
      el:         config.el,
      $el:        _<HTMLElement>(config.el),
      mutation:   config.mutation || false,
      isMutable:  !!config.mutation,
      current:    0,
      pendingTab: undefined,
      classes:    config.classes ?
                    deepmerge(defaultClasses, config.classes) :
                    defaultClasses,
    };

    this.helper = new Helper;

    if (this.config.isMutable) {
      this.config.el.classList.add('x-tabs--' + this.config.mutation);
    }

    const $tabsWrap: MicroDOM<HTMLElement> = _<HTMLElement>('.x-tabs__tabs');

    let _$tabs = $tabsWrap.get<HTMLElement>('.x-tabs__tab');
    let $tabs = _<HTMLElement>();
    for (const el of _$tabs) {
      if (el.parentElement === $tabsWrap[0]) {
        $tabs.push(el);
      }
    }

    // get current tab
    let hasCurrent: boolean = false;
    let currentIndex: number | undefined;
    for (let i = 0, l = $tabs.length; i < l; i++) {
      if (hasCurrent) {
        $tabs[i].classList.remove('x-tabs__tab--active');
      } else if ($tabs[i].classList.contains('x-tabs__tab--active')) {
        currentIndex = i;
      }
    }

    for (let i = 0, l = $tabs.length; i < l; i++) {
      const el = $tabs[i];
      const tab: I_Tab = new Tab(this, {
        el,
        index:    i,
        current:  i === currentIndex,
        helper:   this.helper
      })
      this.tabs.push(tab);
    }

    this.config.current = currentIndex || 0;

    Tabs.instances.push(this);

    if (config.plugins && Array.isArray(config.plugins)) {
      for (const plugin of config.plugins) {
        if (plugin instanceof Plugin) {
          this.plugins.push(new (plugin as I_PluginCtor)(this))
        } else if (isObject(plugin)) {
          this.plugins.push(new (plugin as I_TabsPluginCfg).ctor(this, (plugin as I_TabsPluginCfg).config));
        }
      }
    }

    this.emitter.emit('init', this, this.config.current);
  }

  goTo(index: number): boolean {
    if (! this.tabs[index]) {
      return false;
    }

    const current = this.config.current;

    this.emitter.emit('beforeChange', this, current, index);

    this.config.current = index;

    if (this.config.isMutable) {
      if (this.config.pendingTab) {
        this.helper.cb = (tab: I_Tab) => {
          if (tab.config.current) {
            this.helper.cb = (tab: I_Tab) => {
              this.helper.cb = () => {
                this.config.pendingTab = undefined;
                this.helper.cb = undefined;
                this.emitter.emit('afterChange', this, current, index)
              }
              this.tabs[index].show();
            }
            tab.hide();
          } else {
            this.helper.cb = () => {
              this.config.pendingTab = undefined;
              this.helper.cb = undefined;
              this.emitter.emit('afterChange', this, current, index)
            }
            this.tabs[index].show();
          }
        }
      } else {
        this.config.pendingTab = this.tabs[current];
        this.helper.cb = (tab: I_Tab) => {
          this.helper.cb = () => {
            this.config.pendingTab = undefined;
            this.helper.cb = undefined;
            this.emitter.emit('afterChange', this, current, index)
          }
          this.tabs[index].show();
        }
        this.tabs[current].hide();
      }
    } else {
      this.helper.cb = () => {
        this.helper.cb = undefined;
        this.helper.cb = () => this.emitter.emit('afterChange', this, current, index);
        this.tabs[index].show();
      }
      this.tabs[current].hide();
    }

    return true;
  }

  prev(): boolean {
    return this.goTo(this.config.current - 1);
  }

  next(): boolean {
    return this.goTo(this.config.current + 1);
  }
}

export default Tabs;