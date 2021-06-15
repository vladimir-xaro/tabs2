import CSSClassAnimations from "@xaro/css-class-animations";
import { nextTick } from "@xaro/micro-dom";

export const keys = (obj: Object) => Object.keys(obj);

export function animate(
  animInst:   CSSClassAnimations,
  clsFrom:    string,
  clsActive:  string,
  clsTo:      string,
  afterEnd?:  Function) {
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