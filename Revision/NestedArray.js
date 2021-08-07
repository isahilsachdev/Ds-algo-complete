function flat(arr) {
  const stack = [...arr];
  let res = '';

  while (stack.length) {
    let last = stack.pop();

    if (Array.isArray(last)) {
      //   if its array spread it
      stack.push(...last);
    } else {
      // else put it in top of result string
      res = `${last} ${res}`;
    }
  }

  return res;
}
const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr);
console.log(flat(arr));
