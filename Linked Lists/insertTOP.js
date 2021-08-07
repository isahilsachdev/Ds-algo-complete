const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below

function insertNodeAtHead(head, data) {
  const node = new LinkedListNode(data);
  if (!head) {
    head = node;
  } else {
    node.next = head;
    head = node;
  }
  return head;
}
