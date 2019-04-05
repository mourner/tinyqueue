
import {test} from 'tape';
import TinyQueue from './index.js';

const data = [];
for (let i = 0; i < 100; i++) {
    data.push(Math.floor(100 * Math.random()));
}

const sorted = data.slice().sort((a, b) => a - b);

test('maintains a priority queue', (t) => {
    const queue = new TinyQueue();
    for (let i = 0; i < data.length; i++) queue.push(data[i]);

    t.equal(queue.peek(), sorted[0]);

    const result = [];
    while (queue.length) result.push(queue.pop());

    t.same(result, sorted);

    t.end();
});

test('accepts data in constructor', (t) => {
    const queue = new TinyQueue(data.slice());

    const result = [];
    while (queue.length) result.push(queue.pop());

    t.same(result, sorted);

    t.end();
});

test('handles edge cases with few elements', (t) => {
    const queue = new TinyQueue();

    queue.push(2);
    queue.push(1);
    queue.pop();
    queue.pop();
    queue.pop();
    queue.push(2);
    queue.push(1);
    t.equal(queue.pop(), 1);
    t.equal(queue.pop(), 2);
    t.equal(queue.pop(), undefined);

    t.end();
});

test('handles init with empty array', (t) => {
    const queue = new TinyQueue([]);

    t.same(queue.data, []);

    t.end();
});
