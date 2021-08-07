const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below

function reverse(head) {
  var prev = null;
  var current = head;

  while (current) {
    var ahead = current.next;
    current.next = prev;
    prev = current;

    current = ahead;
  }
  return prev;
}
