/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    // check for empty list
    if (!this.head) {
      throw new Error("List is empty");
    }

    // check for list with 1 item
    if (this.head === this.tail) {
      let removed = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return removed;
    }

    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    let removed = this.tail.val;
    this.tail = current;
    this.tail.next = null;
    this.length--;
    return removed;
  }

  /** shift(): return & remove first item. */

  shift() {
    // check for empty list
    if (!this.head) {
      throw new Error("List is empty");
    }

    // check for list with 1 item
    if (this.head === this.tail) {
      let removed = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return removed;
    }

    let removed = this.head.val;
    this.head = this.head.next;
    this.length--;
    return removed;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    // if index invalid
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index out of bounds");
    }

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    // if index invalid
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index out of bounds");
    }

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // if index invalid
    if (idx < 0 || idx > this.length) {
      throw new Error("Index out of bounds");
    }

    let newNode = new Node(val);
    let current = this.head;

    // insertion at the beginning
    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.tail = newNode;
    } else {
      for (let i = 0; i < idx - 1; i++) {
        if (current === null) {
          throw new Error("Index out of bounds");
        }
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
      if (idx === this.length) {
        this.tail = newNode;
      }
    }
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // if index invalid
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index out of bounds");
    }

    let current = this.head;

    // removal at the beginning
    if (idx === 0) {
        let removed = this.head.val;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return removed;
    }

    // removal at the end
    if (idx === this.length - 1) {
        let removed = this.tail.val;
        this.tail = current;
        this.tail.next = null;
        this.length--;
        return removed;
    }

    // removal in the middle
    for (let i = 0; i < idx - 1; i++) {
        if (current === null) {
            throw new Error("Index out of bounds");
        }
        current = current.next;
    }
    let removed = current.next.val;
    current.next = current.next.next;
    this.length--;
    return removed;

  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }
    let sum = 0;
    let current = this.head;
    while (current !== null) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
