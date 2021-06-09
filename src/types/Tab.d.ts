import CSSClassAnimations from "@xaro/css-class-animations";
import { MicroDOM } from "@xaro/micro-dom";
import { Helper } from "./Helper";
import { Tabs } from "./Tabs";

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

export interface TabChangeCfg {
  force?: boolean;
}