import './scss/index.dev.scss';

import _ from '@xaro/micro-dom';
import Tabs from './index';
import Navigation from './plugins/Navigation/';
import {
  Tabs as I_Tabs
} from './types/Tabs';

const tabs = new Tabs({
  el:       _<HTMLElement>('.x-tabs')[0],
  mutation: 'transition',
  on: {
    init(tabs: I_Tabs, currentIndex: number) {
      console.log('init', currentIndex);
    },
    beforeChange(tabs: I_Tabs, prevIndex: number, nextIndex: number) {
      console.log('on beforeChange', prevIndex, nextIndex);
    },
    afterChange(tabs: I_Tabs, prevIndex: number, nextIndex: number) {
      console.log('on afterChange', prevIndex, nextIndex);
    }
  },
  plugins: [
    {
      ctor:  Navigation,
      config: {
        el: _<HTMLElement>('.x-tabs__navs')[0]
      }
    }
  ],
  classes: {
    // tabs: {
    //   transition: {
    //     hide: {
          
    //     }
    //   }
    // }
  }
});

_('.btn-prev').addEventListener('click', () => tabs.prev());
_('.btn-next').addEventListener('click', () => tabs.next());

(window as any).tabs = tabs;

// console.log(tabs);

console.log('entry result', tabs);