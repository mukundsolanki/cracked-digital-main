'use client';

import { useEffect, useState } from 'react';

export default function ScrollingCodeSnippet() {
  const [codeLines, setCodeLines] = useState<string[]>([]);

  const generateRandomCode = () => {
    const codeSnippets = [
      'function brokenCode() {',
      '  const undefined = null;',
      '  let x = y + z;',
      '  return undefined.undefined;',
      '}',
      '',
      'class BuggyClass {',
      '  constructor() {',
      '    this.data = [];',
      '    this.data.push(this.data);',
      '  }',
      '  async brokenMethod() {',
      '    await setTimeout(() => {}, 0);',
      '    return this.data[999999];',
      '  }',
      '}',
      '',
      'const obj = {',
      '  prop: "value",',
      '  method: function() {',
      '    console.log(this.prop);',
      '  }',
      '};',
      '',
      'obj.method(); // Will break',
      '',
      'function recursiveHell() {',
      '  return recursiveHell();',
      '}',
      '',
      'const array = [1, 2, 3];',
      'array[10] = "out of bounds";',
      'console.log(array.length);',
      '',
      'function typeConfusion(a, b) {',
      '  return a + b;',
      '}',
      '',
      'typeConfusion("hello", 42); // NaN incoming',
      '',
      'const promise = new Promise((resolve) => {',
      '  resolve("success");',
      '});',
      '',
      'promise.then(result => {',
      '  throw new Error("Always fails");',
      '});',
      '',
      'function memoryLeak() {',
      '  const bigArray = new Array(1000000);',
      '  return function() {',
      '    return bigArray;',
      '  };',
      '}',
      '',
      'const leak = memoryLeak();',
      'setInterval(leak, 1000);',
      '',
      'class CircularReference {',
      '  constructor() {',
      '    this.self = this;',
      '    this.self.self = this;',
      '  }',
      '}',
      '',
      'const circular = new CircularReference();',
      'JSON.stringify(circular); // Stack overflow',
      '',
      'function asyncHell() {',
      '  setTimeout(() => {',
      '    console.log("Never executes");',
      '  }, -1000);',
      '}',
      '',
      'const regex = /[a-z+/;',
      'regex.test("valid string"); // Syntax error',
      '',
      'function divideByZero() {',
      '  return 1 / 0;',
      '}',
      '',
      'const result = divideByZero();',
      'console.log(result === Infinity);',
      '',
      'function callbackHell() {',
      '  setTimeout(() => {',
      '    setTimeout(() => {',
      '      setTimeout(() => {',
      '        throw new Error("Deep error");',
      '      }, 0);',
      '    }, 0);',
      '  }, 0);',
      '}',
      '',
      'const globalVar = "pollution";',
      'window.globalVar = globalVar;',
      '',
      'function shadowing() {',
      '  const x = 1;',
      '  if (true) {',
      '    const x = 2;',
      '    console.log(x);',
      '  }',
      '  return x;',
      '}',
      '',
      '// This code is intentionally broken',
      "// Don't try to run it!",
      '// Welcome to CRACKED Community',
      '// Where bugs become features',
      '',
      'function infiniteLoop() {',
      '  while (true) {',
      '    // This will never end',
      '  }',
      '}',
      '',
      'const obj2 = {};',
      'Object.defineProperty(obj2, "prop", {',
      '  get: function() {',
      '    return this.prop; // Infinite recursion',
      '  }',
      '});',
      '',
      'console.log(obj2.prop); // Stack overflow',
      '',
      'function raceCondition() {',
      '  let counter = 0;',
      '  for (let i = 0; i < 1000; i++) {',
      '    setTimeout(() => counter++, 0);',
      '  }',
      '  return counter; // Unpredictable result',
      '}',
      '',
      'const eventEmitter = new EventTarget();',
      'eventEmitter.addEventListener("test", () => {',
      '  eventEmitter.dispatchEvent(new Event("test"));',
      '});',
      '',
      'eventEmitter.dispatchEvent(new Event("test")); // Infinite recursion',
      '',
      '// More broken code coming...',
      'function typeCoercion() {',
      '  return [] + {}; // "[object Object]"',
      '}',
      '',
      'function falsyValues() {',
      '  return 0 == false; // true',
      '}',
      '',
      'function hoisting() {',
      '  console.log(x); // undefined, not error',
      '  var x = 5;',
      '}',
      '',
      'function closure() {',
      '  var funcs = [];',
      '  for (var i = 0; i < 3; i++) {',
      '    funcs[i] = function() {',
      '      return i; // All return 3',
      '    };',
      '  }',
      '  return funcs;',
      '}',
      '',
      'const funcs = closure();',
      'funcs[0](); // 3, not 0',
      'funcs[1](); // 3, not 1',
      'funcs[2](); // 3, not 2',
      '',
      '// End of broken code examples',
      '// Join CRACKED Community to learn more!',
    ];

    return codeSnippets;
  };

  useEffect(() => {
    const baseCode = generateRandomCode();
    setCodeLines(baseCode);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(100vh);
          }
          100% {
            transform: translateY(-100%);
          }
        }
      `}</style>
      <div className='absolute top-0 right-0 w-60 sm:w-72 md:w-80 h-full overflow-hidden hidden sm:block'>
        <div
          className='absolute right-4 sm:right-6 font-mono text-xs leading-relaxed opacity-15 transition-colors duration-300'
          style={{
            whiteSpace: 'pre',
            width: 'calc(100% - 2rem)',
            maxWidth: '280px',
            animation: 'scrollUp 60s linear infinite',
            color: 'var(--color-text-secondary)',
          }}
        >
          {codeLines.join('\n')}
          {'\n\n'}
          {codeLines.join('\n')}
          {'\n\n'}
          {codeLines.join('\n')}
        </div>
      </div>
    </>
  );
}
