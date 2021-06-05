# @xaro/tabs
> description

## Install
```sh
npm install @xaro/tabs --save-dev
```

## Usage
### Common usage
```js
import xtabs from "@xaro/tabs";

// This creates instance for each element with 'x-tabs' class and returns array of Tabs instances or one instance
const tabs = xtabs({
  el: '.x-tabs'
});
```
### With types
```ts
import xtabs from "@xaro/tabs";

### Creating your own entry function with your classes for tabs & navs
```ts
import _ from "@xaro/micro-dom";  // Extended array with additional function for iterate dom elements. You can use common Array<Element>
import {
  Tabs,
  TabsDefaults
  TabsExtendedConstructorConfig
} from "@xaro/tabs/src/types/Tabs";
import TabsClass  from "@xaro/tabs/src/Tabs";
import entry      from "@xaro/tabs/src/entry";
import TabClass   from "./Tab";    // Here your classes
import NavClass   from "./Nav";    // Here your classes

/**
 * The default classes that are used for each 
 * Classes must implement the TabConstructor/NavConstructor and
 * Tab/Nav interfaces
 * See "@xaro/tabs/src/types/Tab.d.ts" and
 * "@xaro/tabs/src/types/Nav.d.ts" respectively
 */
const defaults: TabsDefaults = {
  classes: {
    Tab: TabClass,
    Nav: NavClass
  }
}

export default (
  config: TabsExtendedConstructorConfig,
): Tabs | Tabs[] => entry(config, defaults, TabsClass);
```

### Create your class
```ts
// File #1
import {
  TabsDefaults,
  TabsConstructorConfig
} from "@xaro/tabs/src/types/Tabs";
import Tabs from "@xaro/tabs/src/Tabs.ts"
import TabClass   from "./Tab";    // Here your classes
import NavClass   from "./Nav";    // Here your classes

// Default settings for each instance
const defaults: TabsDefaults = {
  classes: {
    Tab: TabClass,
    Nav: NavClass
  }
}

export default class MyTabs extends Tabs {
  constructor(config: TabsConstructorConfig) {
    super(config, defaults);
  }
}

// File #2
import MyTabs from "File #1";
const tabs = new MyTabs({
  ...
})
```
> Note that the Tabs constructor takes an element of type Element
>
> Not Array or String !!!
>
> See the **"@xaro/tabs/src/types/Tabs.d.ts"** file for details
```ts
export interface TabsConstructorConfig extends TabsBaseConstructorConfig {
  el: Element;
}
```
> To accept a different type of element, see the implementation of the entry function in the **"@xaro/tabs/src/index.ts"** file.

## License
[MIT](LICENSE)