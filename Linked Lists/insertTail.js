const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below

function insertNodeAtTail(head, data) {
  var node = new LinkedListNode(data);
  var current = head;
  if (!head) {
    head = node;
  } else {
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }

  return head;
}
