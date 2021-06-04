class BrainfuckCompilerError extends Error {
    constructor(message) {
        super(message);
        this.name = 'BrainfuckCompilerError';
    }
}

/**
 * Compiles a brainfuck code and returns its result
 * @param {String} input
 */

function brainfuck(input) {
    if (/[^+\-<>\[\],.]/.test(input)) throw new BrainfuckCompilerError('Unexpected character "' + input.match(/[^+\-<>\[\],.]/)[0] + '"');
    const prompt = require('prompt-sync')();
    const replaced = input.replace(/\[/g, 'while (arr[i]) {\n').replace(/(?<!i)\]/g, '\n}').replace(/\+/g, 'arr[i]++;\n').replace(/-/g, 'arr[i]--;\n').replace(/\./g, 'console.log(arr[i]);\n').replace(/</g, 'i--;\n').replace(/\>/g, 'i++;\n').replace(/,/g, 'arr[i] = prompt();\n'); //what the fuck is this
    console.log(replaced);
    let toEval = new Function('x, prompt', `
    let i = 0;
    const arr = [];
    for (let xo = 0, a = 0; arr.length <= 30000; a++) {
        arr[a] = xo;
    }
    ${replaced}
    `);
    console.log(toEval.toString());
    return toEval(input, prompt);
}

module.exports = brainfuck;