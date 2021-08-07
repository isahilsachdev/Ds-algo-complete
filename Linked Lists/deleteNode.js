const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below

function deleteNode(head, position) {
  var current = head;
  var prev = null;
  var count = 0;
  if (position == 0) {
    head.current.next;
  } else {
    //   while(current ) , coz else it will not go to last element
    while (current) {
      if (count == position) {
        prev.next = current.next;
        current = current.next;
        break;
      } else {
        prev = current;
        current = current.next;
        count++;
      }
    }
    return head;
  }
}
