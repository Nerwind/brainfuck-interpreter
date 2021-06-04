brainfuck-compiler-x is a brainfuck language interpreter. Some examples:
```js
const br = require('brainfuck-compiler-x');
br('++>--.<.'); //Console: -2, 2
br('++[->+++++<]>.'); //Console: 10
br(',[->++<]>.'); //Input: 2; Console: 6
```

License: ISC