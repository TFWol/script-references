# Script Reminders

## GM_Config
Easily build graphical menus to edit saved values

REF: https://github.com/sizzlemctwizzle/GM_config/wiki/

## Super_GM_setValue_and_GM_getValuejs.js

Instead of just being able to store strings, booleans, and 32-bit integers, allows you to store any JavaScript variable type.

In your user script, use the functions like so:

```js
GM_SuperValue.set (varName, varValue);
var x = GM_SuperValue.get (varName, defaultValue);
```

That is, just like you would use `GM_setValue` and `GM_getValue`

## ViolentMonkeyDOM
Makes using MutationObserver a bit more convenient via **VM.observe**.

```js
const disconnect = VM.observe(document.body, () => {
  // Find the target node
  const node = document.querySelector('.profile');

  if (node) {
    const h1 = document.createElement('h1');
    h1.textContent = 'Profile';
    node.prepend(h1);

    // disconnect observer
    return true;
  }
});

// You can also disconnect the observer explicitly when it's not used any more
disconnect();
```

REF: 
  - https://violentmonkey.github.io/guide/observing-dom/
  - https://violentmonkey.github.io/vm-dom/functions/observe.html

