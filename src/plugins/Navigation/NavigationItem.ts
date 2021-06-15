import { Navigation as I_Navigation } from "./types/Navigation";
import {
  NavigationItemCtor    as I_NavigationItemCtor,
  NavigationItem        as I_NavigationItem,
  NavigationItemCtorCfg as I_NavigationItemCtorCfg,
  NavigationItemCfg     as I_NavigationItemCfg
} from "./types/NavigationItem";
import { Plugin as I_Plugin } from "src/types/Plugin";
import CSSClassAnimations from "@xaro/css-class-animations";
import { animate } from "src/helpers";

const NavigationItem: I_NavigationItemCtor = class implements I_NavigationItem {
  plugin: I_Navigation;
  config: I_NavigationItemCfg;
  anim:   CSSClassAnimations;

  constructor(plugin: I_Navigation, config: I_NavigationItemCtorCfg) {
    this.plugin = plugin;
    this.config = {
      el:       config.el,
      index:    config.index,
      pending:  false,
      current:  config.index === (this.plugin as unknown as I_Plugin).tabs.config.current,
    } as any;

    console.log(this.config.el);
    // this.click = this.click.bind(this);
    this.config.el.addEventListener('click', () => {
      // this.click();
    });

    this.anim = new CSSClassAnimations({
      el: this.config.el,
      allow: [
        'transitionend',
        'animationend',
      ]
    })
    this.config.el
  }

  click() {
    animate(
      this.anim,
      'x-nav--t-activate-from',
      'x-nav--t-activate-active',
      'x-nav--t-activate-to'
    );

    (this.plugin as unknown as I_Plugin).tabs.goTo(this.config.index);
  }

  activate() {
    animate(
      this.anim,
      'x-nav--t-activate-from',
      'x-nav--t-activate-active',
      'x-nav--t-activate-to'
    );
  }

  deactivate() {

  }
}

export default NavigationItem;