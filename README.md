## tinyqueue

The smallest and simplest binary heap priority queue in JavaScript.

```js
// create an empty priority queue
let queue = new TinyQueue();

// add some items
queue.push(7);
queue.push(5);
queue.push(10);

// remove the top item
let top = queue.pop(); // returns 5

// return the top item (without removal)
top = queue.peek(); // returns 7

// get queue length
queue.length; // returns 2

// create a priority queue from an existing array (modifies the array)
queue = new TinyQueue([7, 5, 10]);

// pass a custom item comparator as a second argument
queue = new TinyQueue([{value: 5}, {value: 7}], function (a, b) {
	return a.value - b.value;
});

// turn a queue into a sorted array
const array = [];
while (queue.length) array.push(queue.pop());
```

For a faster number-based queue, see [flatqueue](https://github.com/mourner/flatqueue).

### Install

Install using NPM (`npm install tinyqueue`), then import as a module:

```js
import TinyQueue from 'tinyqueue';
```

Or use a browser build from a CDN:

```html
<script type="module">
	import TinyQueue from 'https://cdn.jsdelivr.net/npm/tinyqueue/+esm';
```

### Thanks

Inspired by [js-priority-queue](https://github.com/adamhooper/js-priority-queue)
by [Adam Hooper](https://github.com/adamhooper).
