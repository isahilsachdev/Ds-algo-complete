Operators = ['+', '-', '*', '/', '(', ')', '^'];
Priority = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };
expression = '(A + B) * C + D / (E + F * G) - H';
// expression = 'A+B*C/(E-F)';
// steps
// if i not in operator , add in result of
// if it is "(" add to stack
// if its ")" pop elements from stack until last element in stack=="(" then pop "(" too
// then if its some operator check if stack exist and keep poping until stack exist ,and current
//  element is more than or equal to stack[-1].
//  then add all remaining elements in stack to res

function postfix(exp) {
  stack = [];
  res = '';
  console.log('infix', exp);
  for (let i = 0; i < expression.length; i++) {
    if (!Operators.includes(exp[i])) {
      res += exp[i];
    } else if (exp[i] == '(') {
      stack.push(exp[i]);
    } else if (exp[i] == ')') {
      while (stack && stack[stack.length - 1] != '(') {
        res += stack.pop();
      }
      stack.pop();
    } else {
      while (
        stack &&
        stack[stack.length - 1] != '(' &&
        Priority[exp[i]] <= Priority[stack[stack.length - 1]]
      ) {
        res += stack.pop();
      }
      stack.push(exp[i]);
    }
  }
  while (stack.length) {
    res += stack.pop();
  }
  console.log('Postfix', res);
}
postfix(expression);
