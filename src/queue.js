const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  #array = [];
  getUnderlyingList() {
    return this.#array.reduce((acc, cur) => {
      if (acc) {
        const node = {};
        node.value = cur;
        node.next = acc;
        return node;
      }
  
      let temp = {};
      temp.value = cur;
      temp.next = null;
      return temp;
    }, null);
  }

  enqueue(value) {
    this.#array.unshift(value);
  }

  dequeue() {
    return undefined || this.#array.pop();
  }
}
