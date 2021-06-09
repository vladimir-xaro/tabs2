import EventEmitter from "@xaro/event-emitter";
import CSSClassAnimations from "@xaro/css-class-animations";
import { MicroDOM } from "@xaro/micro-dom";

export type MutationType = 'animation' | 'transition';

export interface TabsCtor {
  instances: Tabs[];

  new(config: TabsCtorCfg): Tabs;
}

export default class Tabs {
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

  classes?: {
    transition?:  string;
    animation?:   string;
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

      animation?: {
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
    };
  };

  [key: string]:  any;
}

export interface TabsCfg {
  el:             HTMLElement;
  $el:            MicroDOM<HTMLElement>;
  mutation:       MutationType | false;
  isMutable:      boolean;
  current:        number;
  pendingTab?:    Tab;

  classes: {
    transition: string;
    animation:  string;

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

      animation: {
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
    };
  };

  [key: string]:  any;
}

export interface TabsPluginCfg {
  ctor:     PluginCtor;
  config?:  { [key: string]: any };
}

export interface TabCtor {
  new(tabs: Tabs, config: TabCtorCfg);
}

export class Tab {
  tabs:     Tabs;

  config:   TabCfg;

  pending:  boolean;

  anim?:    CSSClassAnimations;

  helper:   Helper;

  constructor(tabs: Tabs, config: TabCtorCfg);

  change(hide: boolean, config?: TabChangeCfg): void;
  hide(config?: TabChangeCfg): void;
  show(config?: TabChangeCfg): void;
}

export interface TabCtorCfg {
  el:       HTMLElement;
  index:    number;
  current:  boolean;
  helper:   Helper;
}

export interface TabCfg {
  el:       HTMLElement;
  $el:      MicroDOM<HTMLElement>;
  index:    number;
  current:  boolean;
}

export interface Helper {
  cb?: Function;
}

export interface PluginCtor {
  new(tabs: Tabs, config?: PluginCtorCfg);
}

export class Plugin {
  tabs: Tabs;

  constructor(tabs: Tabs, config?: PluginCtorCfg);
}

export interface PluginCtorCfg {
  [key: string]: any;
}

export interface TabsGoToCfg {
  force?: boolean;
}

export interface TabChangeCfg {
  force?: boolean;
}