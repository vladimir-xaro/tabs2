import { Tabs, TabsCfg } from "src/types/Tabs";

export class Navigation {
  constructor(tabs: Tabs);

  click(index: number): boolean;
}

export type ExtendedTabsCfg = TabsCfg & {
  classes: {
    navs: {
      wrapper:  string;
      nav:      string;
      active:   string;

      transition: {
        show: string;
        hide: string;
      };

      animation: {
        show: string;
        hide: string;
      };
    }
  };
}