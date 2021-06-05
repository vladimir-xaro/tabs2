import {
  PluginCtor as I_PluginCtor,
  Plugin as I_Plugin,
} from "./types/Plugin";
import { Tabs as I_Tabs } from "./types/Tabs";

const Plugin: I_PluginCtor = class implements I_Plugin {
  tabs: I_Tabs;

  constructor(tabs: I_Tabs) {
    this.tabs = tabs;
  }
}

export default Plugin;