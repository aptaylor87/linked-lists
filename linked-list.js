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
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      throw "There is nothing in this list"
    }
    let currentNode = this.head;
    while (currentNode) {
      if (this.head === this.tail) {
        let popVal = currentNode.val;
        this.head = null;
        this.tail = null;
        this.length--;
        return popVal;
      }
      if (currentNode.next === this.tail) {
        let popVal = this.tail.val;
        this.tail = currentNode;
        this.length--;
        return popVal;
      }
      currentNode = currentNode.next;
    }


  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      throw "There is nothing in this list"
    }
    let nextVal = this.head.next;
    let shiftVal = this.head.val;
    this.head = nextVal;
    if (!nextVal) this.tail = null;
    this.length--;
    return shiftVal;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (!this.head) {
      throw "There is nothing in this list"
    }
    let counter = 0;
    let currentNode = this.head
    while (currentNode) {
      if (counter === idx) {
        return currentNode.val
      }
      counter++;
      currentNode = currentNode.next;
    }
    throw "Not a valid index"
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (!this.head) {
      throw "There is nothing in this list"
    }
    let counter = 0;
    let currentNode = this.head
    while (currentNode) {
      if (counter === idx) {
        currentNode.val = val;
        return;
      }
      counter++;
      currentNode = currentNode.next;
    }
    throw "Not a valid index"

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx === 0) {
      this.unshift(val)
      return;
    }
    if (idx === this.length) {
      this.push(val);
      return;
    }
    let counter = 0;
    let currentNode = this.head;
    let previousNode = null;
    
    while (currentNode) {
      if (counter === idx) {
        const newNode = new Node(val);
        newNode.next = currentNode
        previousNode.next = newNode;
        this.length++;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }
    throw "Not a valid index"

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentNode = this.head;
    let counter = 0;
    let previousNode = null;

    if (idx === 0) {
      this.shift()
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return;
    }

    if (idx === this.length) {
      this.pop();
      return;
    }
    while (currentNode) {
      if (counter === idx) {
        previousNode.next = currentNode.next;
        this.length--;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
      counter++;
      
    }
    throw "Not a valid index"

  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      return 0;
    }
    let counter = 0;
    let total = 0;
    let currentNode = this.head;
    while (currentNode) {
      total = total + currentNode.val;
      counter++;
      currentNode = currentNode.next;
    }
    return (total/counter);
  }
}

module.exports = LinkedList;
