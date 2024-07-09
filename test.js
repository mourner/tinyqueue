
import test from 'node:test';
import assert from 'node:assert/strict';

import TinyQueue from './index.js';

const data = [];
for (let i = 0; i < 100; i++) {
    data.push(Math.floor(100 * Math.random()));
}

const sorted = data.slice().sort((a, b) => a - b);

test('maintains a priority queue', () => {
    const queue = new TinyQueue();
    for (let i = 0; i < data.length; i++) queue.push(data[i]);

    assert.equal(queue.peek(), sorted[0]);

    const result = [];
    while (queue.length) result.push(queue.pop());

    assert.deepEqual(result, sorted);
});

test('accepts data in constructor', () => {
    const queue = new TinyQueue(data.slice());

    const result = [];
    while (queue.length) result.push(queue.pop());

    assert.deepEqual(result, sorted);
});

test('handles edge cases with few elements', () => {
    const queue = new TinyQueue();

    queue.push(2);
    queue.push(1);
    queue.pop();
    queue.pop();
    queue.pop();
    queue.push(2);
    queue.push(1);
    assert.equal(queue.pop(), 1);
    assert.equal(queue.pop(), 2);
    assert.equal(queue.pop(), undefined);
});

test('handles init with empty array', () => {
    const queue = new TinyQueue([]);

    assert.deepEqual(queue.data, []);
});

test('updates few elements', (t) => {
    const queue = new TinyQueue();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    queue.push(1);

    let res = queue.update(4, (val) => { return val == 1 });
    t.equal(res, true);
    t.equal(queue.length, 4);
    t.equal(queue.peek(), 1);

    res = queue.update(4, (val) => { return val == 1 });
    t.equal(res, true);
    t.equal(queue.length, 4);
    t.equal(queue.peek(), 2);

    t.end();
});
