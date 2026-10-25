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
class Queue {
  constructor() {
    this.id = `[id=${new Date().toJSON().slice(-4, -1)}] `;
    console.log(`\n\n${this.id} constructor() - создали очередь`);
    this.headNode = null;
    this.tailNode = null;
  }

  getUnderlyingList() {
    console.log(`\n${this.id} getUnderlyingList() - получили очередь`);
    console.log(this.headNode);
    return this.headNode;
  }

  getLength() {
    let length = 0;
    let pointer = this.headNode;
    while (pointer !== null) {
      pointer = pointer.next;
      length += 1;
    }
    return length;
  }

  enqueue(value) {
    console.log(`\n${this.id} enqueue(${value}) - добавили элемент в очередь`);
    const NEW_NODE = {
      value: value,
      next: null,
    };

    const IS_QUEUE_EMPTY = this.getLength() === 0;
    if (IS_QUEUE_EMPTY) {
      this.headNode = NEW_NODE;
      this.tailNode = NEW_NODE;
      console.log(this.headNode);
      return;
    }

    this.tailNode.next = NEW_NODE;
    this.tailNode = NEW_NODE;
    console.log(this.headNode);
  }

  dequeue() {
    console.log(
      `\n${this.id} dequeue() - получили элемент очереди и уменьшили очередь'`,
    );
    if (!this.headNode) {
      console.log(undefined, "- элемент очереди");
      console.log(this.headNode);
      return undefined;
    }
    const HEAD_ELEMENT = this.headNode;
    this.headNode = this.headNode.next;
    console.log(HEAD_ELEMENT.value, "- элемент очерди");
    console.log(this.headNode);
    return HEAD_ELEMENT.value;
  }
}

module.exports = {
  Queue,
};
