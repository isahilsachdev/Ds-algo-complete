const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below

// with pointer
function insertNodeAtPosition(head, data, position) {
  let node = new LinkedListNode(data);
  let pointer = head;
  let counter = 1;
  if (position == 0) {
    node.next = head;
    head = node;
  }

  while (pointer.next != null) {
    if (counter == position) {
      node.next = pointer.next;
      pointer.next = node;
      break;
    }
    counter += 1;
    pointer = pointer.next;
  }
  return head;
}

// method two
function insertNodeAtPosition(head, data, position) {
  var node = new LinkedListNode(data);
  var current = head;
  var count = 1;

  if (position == 0) {
    node.next = head;
    head = node;
  } else {
    while (current.next != null && count != position) {
      current = current.next;
      count++;
    }
    node.next = current.next;
    current.next = node;
  }
  return head;
}
