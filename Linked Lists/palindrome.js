const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
// Complete the function below
var isPalindrome = function (head) {
  first = head;
  second = head;
  flag = true;
  stack = [];

  while (second != null) {
    stack.push(second.data);
    second = second.next;
  }
  while (first != null) {
    if (first.data == stack.pop()) {
      first = first.next;
    } else {
      flag = false;
      break;
    }
  }
  return flag;
};
