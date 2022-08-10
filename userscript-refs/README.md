# Script Reminders

## GM_Config
Easily build graphical menus to edit saved values

REF: https://github.com/sizzlemctwizzle/GM_config/wiki/

## Super_GM_setValue_and_GM_getValuejs.js

Instead of just being able to store strings, booleans, and 32-bit integers, allows you to store any javascript variable type.

In your user script, use the functions like so:

```js
GM_SuperValue.set (varName, varValue);
var x = GM_SuperValue.get (varName, defaultValue);
```

That is, just like you would use `GM_setValue` and `GM_getValue`
