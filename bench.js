
import TinyQueue from './index.js';

const N = 1000000;

const data = [];
for (let i = 0; i < N; i++) data[i] = {value: Math.random()};

const q = new TinyQueue([], compare);

function compare(a, b) {
    return a.value - b.value;
}

console.time(`push ${N}`);
for (let i = 0; i < 1000000; i++) q.push(data[i]);
console.timeEnd(`push ${N}`);

console.time(`pop ${N}`);
for (let i = 0; i < 1000000; i++) q.pop();
console.timeEnd(`pop ${N}`);
