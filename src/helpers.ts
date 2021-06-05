import CSSClassAnimations from "@xaro/css-class-animations";
import { nextTick } from "@xaro/micro-dom";
import { Tab as I_Tab } from "./types/Tab";
import { MutationType } from "./types/types";

export const keys = (obj: Object) => Object.keys(obj);
export const isObject = (el: any) => el && typeof el === 'object' && el !== null;

export function animate({
  animInst,   // CSSClassAnimations
  clsFrom,    // string
  clsActive,  // string
  clsTo,      // string
}, afterEnd?: Function) {
  animInst.els.addClass(clsFrom)

  nextTick(
    [
      () => animInst.els.addClass(clsActive),
      10
    ], [
      () => animInst.els.removeClass(clsFrom),
      10
    ], [
      () => {
        animInst.emitter.once('end', () => {
          animInst.els.removeClass(clsTo, clsActive);
          afterEnd && afterEnd();
        });
        animInst.els.addClass(clsTo);
      },
      10
    ]
  );
}