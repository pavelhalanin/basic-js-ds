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
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  console.log(`\n\nremoveKFromList(${JSON.stringify(l)}, ${k})`);

  let pointer = l;
  const ARRAY = [];
  while (pointer !== null) {
    if (pointer.value !== k) {
      ARRAY.push(pointer.value);
    }
    pointer = pointer.next;
  }

  console.log(ARRAY);

  if (ARRAY.length == 0) {
    return null;
  }

  const HEAD = {
    value: ARRAY[0],
    next: null,
  };

  let pointer_i = HEAD;
  for (let i = 1; i < ARRAY.length; i += 1) {
    const NEW_NODE = {
      value: ARRAY[i],
      next: null,
    };
    pointer_i.next = NEW_NODE;
    pointer_i = NEW_NODE;
  }

  return HEAD;
}

module.exports = {
  removeKFromList,
};
