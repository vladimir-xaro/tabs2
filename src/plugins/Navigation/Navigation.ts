import Plugin from "src/Plugin";
import {
  Tabs as I_Tabs
} from "src/types/Tabs";
import {
  Plugin      as I_Plugin,
  PluginCtor  as I_PluginCtor
} from "src/types/Plugin";
import NavigationItem from "./NavigationItem";
import {
  ExtendedTabsCfg,
  Navigation      as I_Navigation,
} from "./types/Navigation";
import {
  NavigationItem as I_NavigationItem
} from "./types/NavigationItem";
import deepmerge from "@xaro/deepmerge";
import _ from "@xaro/micro-dom";
import Helper from "src/Helper";
import { Helper as I_Helper } from "src/types/Helper";
import { MutationType } from "src/types/types";

const Navigation: I_PluginCtor = class extends Plugin implements I_Navigation {
  items:      I_NavigationItem[] = [];
  helper:     I_Helper;
  // mutation:   MutationType;
  classes;

  constructor(tabs: I_Tabs) {
    super(tabs);

    const tabsCfgClasses = (this.tabs.config as ExtendedTabsCfg).classes;

    tabsCfgClasses.navs = deepmerge({
      wrapper:  'x-tabs__navs',
      nav:      'x-tabs__nav',
      active:   'x-tabs__nav--active',

      transition: {
        show: 'x-tabs__nav--show',
        hide: 'x-tabs__nav--hide',
      },

      animation: {
        show: 'x-tabs__nav--show',
        hide: 'x-tabs__nav--hide',
      },
    }, tabsCfgClasses.navs || {});

    this.classes = tabsCfgClasses.navs;
    const cfgFromTabs = tabs.config.navigation;
    // this.mutation = cfgFromTabs ? cfgFromTabs.mutation ?

    this.helper = new Helper;

    // this.tabs.config.$el.get<HTMLElement>(this.classes.wrapper);
    const $wrapper = _((this as unknown as I_Plugin).tabs.config.$el.get<HTMLElement>('.' + this.classes.wrapper)[0]);
    const $els = $wrapper.get<HTMLElement>('.' + this.classes.nav);
    for (let i = 0, l = $els.length; i < l; i++) {
      this.items.push(new NavigationItem(this, {
        el:     $els[i],
        index:  i,
      }));
    }
  }

  click(index: number): boolean {
    if (! this.items[index]) {
      return false;
    }

    const current = this.tabs.config.current;

    this.tabs.emitter.emit('beforeNavClick', this, current, index);



    return true;
  }
}

export default Navigation;