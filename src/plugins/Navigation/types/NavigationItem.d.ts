import { Navigation } from "./Navigation";

export interface NavigationItemCtor {
  new(plugin: Navigation, config: NavigationItemCtorCfg);
}

export class NavigationItem {
  constructor(plugin: Navigation, config: NavigationItemCtorCfg);
}

export interface NavigationItemCtorCfg {
  el:     HTMLElement;
  index:  number;
}
export interface NavigationItemCfg {
  el:     HTMLElement;
  index:  number;
}