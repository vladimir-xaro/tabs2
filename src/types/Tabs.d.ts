import EventEmitter from "@xaro/event-emitter";
import { MicroDOM } from "@xaro/micro-dom";
import { Helper } from "./Helper";
import { Plugin, PluginCtor } from "./Plugin";
import { Tab } from "./Tab";
import { MutationType } from "./types";

export interface TabsCtor {
  instances: Tabs[];

  new(config: TabsCtorCfg): Tabs;
}

export class Tabs {
  config:         TabsCfg;
  emitter:        EventEmitter;
  tabs:           Tab[];
  helper:         Helper;
  plugins:        Plugin[];

  constructor(config: TabsCtorCfg);

  goTo(index: number, config?: TabsGoToCfg): boolean;
  prev(): boolean;
  next(): boolean;
}

export interface TabsCtorCfg {
  el:             HTMLElement;
  mutation?:      MutationType | false;
  plugins?:       Array<PluginCtor | TabsPluginCfg>;

  classes?:       TabsCtorCfgClasses

  [key: string]:  any;
}

export interface TabsCfg {
  el:             HTMLElement;
  $el:            MicroDOM<HTMLElement>;
  mutation:       MutationType | false;
  isMutable:      boolean;
  current:        number;
  pendingTab?:    Tab;

  classes:        TabsCfgClasses

  [key: string]:  any;
}

export interface TabsCtorCfgClasses {
  transition?:  string;
  // animation?:   string;
  tabs?: {
    wrapper?:   string;
    tab?:       string;
    active?:    string;

    transition?: {
      hide?: {
        from?:    string;
        active?:  string;
        to?:      string;
      };
      show?: {
        from?:    string;
        active?:  string;
        to?:      string;
      };
    };

    // animation?: {
    //   hide?: {
    //     from?:    string;
    //     active?:  string;
    //     to?:      string;
    //   };
    //   show?: {
    //     from?:    string;
    //     active?:  string;
    //     to?:      string;
    //   };
    // };
  };
}

export interface TabsCfgClasses {
  transition: string;
  // animation:  string;
  tabs: {
    wrapper:  string;
    tab:      string;
    active:   string;

    transition: {
      hide: {
        from:   string;
        active: string;
        to:     string;
      };
      show: {
        from:   string;
        active: string;
        to:     string;
      };
    };

    // animation: {
    //   hide: {
    //     from:   string;
    //     active: string;
    //     to:     string;
    //   };
    //   show: {
    //     from:   string;
    //     active: string;
    //     to:     string;
    //   };
    // };
  };
}

export interface TabsPluginCfg {
  ctor:     PluginCtor;
  config?:  { [key: string]: any };
}

export interface TabsGoToCfg {
  force?: boolean;
}