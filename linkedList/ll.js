/* All the methods applied for the linked list */
// 1 - Create LL
// 2 - Transverse LL
// 3 - Insert LL
// 4 - Delete LL
// 4 - Search LL
// 4 - Reverse LL

/* Singly Linked List Implementation in Js */

const createNode = (value) => {
  return {
    data: value,
    next: null,
  };
};

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertAtEnd(value) {
    this.length++;
    let newNode = createNode(value);

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  insertAtBegin(value) {
    const newNode = createNode(value);
    newNode.next = this.head;
    this.head = newNode;
    return newNode;
  }

  insertAtIndex(value, index) {
    const newNode = createNode(value);
    let i = 0;
    let current = this.head;
    while (i < index - 1) {
      current = current.next;
      i++;
    }
    const nextNode = current.next;
    current.next = newNode;
    newNode.next = nextNode;
    return newNode;
  }

  show() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
    return undefined;
  }

  removeAtEnd() {
    this.length--;
    let current = this.head;
    const val = this.tail.data;
    while (current.next !== this.tail) {
      current = current.next;
    }
    this.tail = current;
    this.tail.next = null;
    return val;
  }

  removeAtBegin() {
    this.length--;
    const val = this.head.data;
    this.head = this.head.next;
    return val;
  }

  removeAtIndex(index) {
    this.length--;
    let current = this.head;
    let i = 0;
    while (i < index - 1) {
      current = current.next;
      i++;
    }
    const nextNode = current.next;
    const val = nextNode.data;
    current.next = nextNode.next;
    return val;
  }

  search(key) {
    let current = this.head;
    let i = 0;
    while (current !== null) {
      if (current.data === key) {
        return { index: i, msg: "Found", success: 1 };
      }
      i++;
      current = current.next;
    }
    return { index: null, msg: "Not found", success: 0 };
  }

  reverse() {
    let prev = null;
    let next = null;
    while (this.head !== null) {
      next = this.head.next;
      this.head.next = prev;
      prev = this.head;
      this.head = next;
    }
    this.head = prev;
  }
}

const ll = new LinkedList();

console.log("Linked List Created with various DTs");

console.log("Insert node at the end");
ll.insertAtEnd(5);
ll.insertAtEnd(8);
ll.insertAtEnd(6);
ll.show();

console.log("Insert node at the begin");
ll.insertAtBegin("a");
ll.insertAtBegin("z");
ll.show();

console.log("Insert node at the given index");
ll.insertAtIndex(12.5, 2);
ll.insertAtIndex(45.55, 4);
ll.show();

console.log("Delete node at the end");
ll.removeAtEnd();
ll.show();

console.log("Delete node at the begin");
ll.removeAtBegin();
ll.show();

console.log("Delete node at the index");
ll.removeAtIndex(2);
ll.show();

console.log("Reverse the linked list");
ll.reverse();
ll.show();

console.log("Search the item in the linked list");
const key = "a";
const { index, success, msg } = ll.search(key);
if (success) {
  console.log(`Key - ${key} found at index ${index}`);
} else {
  console.log(`Key - ${key} not found in the list`);
}

module.exports = {
  LinkedList,
};
