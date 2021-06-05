import { Tabs } from "./Tabs";

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