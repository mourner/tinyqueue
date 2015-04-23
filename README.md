The smallest and simplest binary heap priority queue implementation in JavaScript.

```js
// create an empty priority queue
var queue = new Queue();

// add some items
queue.push(7);
queue.push(5);
queue.push(10);

// remove the top item
var top = queue.pop(); // returns 7

// create a priority queue from an existing array (modifies the array)
queue = new Queue([7, 5, 10]);

// pass a custom item comparator as a second argument
queue = new Queue([{value: 5}, {value: 7}], function (a, b) {
	return a.value - b.value;
});
```

Install as an NPM module:

```js
$ npm install tinyqueue
```
