class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //   add element
  add(element) {
    let node = new Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  //   print element
  print() {
    let current = this.head;
    let index = 0;

    while (current) {
      console.log('list', current.element, index++);
      current = current.next;
    }
  }

  //   to check empty
  isEmpty() {
    return this.size === 0 ? true : false;
  }

  //   to check size
  sizeOF() {
    console.log(this.size);
  }

  //   to insert at specific index

  insertAt(element, index) {
    if (index > this.size + 1 || (index < 0 && this.size)) {
      return false;
    }
    let current = this.head;
    let node = new Node(element);
    let prev = null;
    let i = 0;
    if (index === 0) {
      // setting next ref to the new one
      node.next = current;
      //making new one as the head
      this.head = node;
    } else {
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      //   now we are at the index we have to insert
      // we will make the next element as node
      prev.next = node;

      //   we will go to that index
      prev = prev.next;

      //   now making ref to the current element which was already there
      prev.next = current;

      //   increment size
      this.size++;
    }
  }

  // to delete
  remove(element) {
    let current = this.head;
    let prev = null;
    while (current) {
      if (current.element == element) {
        //   removing first element
        if (prev == null) {
          this.head = current.next;
        }
        //   removing other element
        else {
          prev.next = current.next;
        }
        this.size--;
        return true;
      }
      prev = current;
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.add(1);
console.log(list.isEmpty());
list.sizeOF();
list.insertAt(3, 0);
list.insertAt(2, 2);
list.remove(3);
list.print();
