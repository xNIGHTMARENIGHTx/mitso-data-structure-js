const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
module.exports = function removeKFromList(l, k) {
  let cur = l.next;
  let next = cur.next;
  let prev = l;
  while (next !== null) {
    if (prev.value === k) {
      prev = cur;
      cur = cur.next;
      next = cur.next;
      l = prev;
      continue;
    }
    if (cur.value === k) {
      prev.next = cur.next;
      cur = cur.next;
      next = cur.next;
      continue;
    }
    prev = cur;
    cur = next;
    next = next.next;
  }
  if (cur.value === k) {
    prev.next = cur.next;
    cur = cur.next;
  }
  return l;
}
