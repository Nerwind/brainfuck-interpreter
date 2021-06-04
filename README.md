brainfuck-interpreter is a brainfuck language interpreter (yes). Some examples:
```js
const br = require('brainfuck-interpreter');
br('++>--.<.'); //Console: -2, 2
br('++[->+++++<]>.'); //Console: 10
br(',[->++<]>.'); //Input: 2; Console: 6
```

License: ISC