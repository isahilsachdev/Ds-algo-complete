function fool() {
  return {
    bar: 'hello',
  };
}
function fool2() {
  return;
  {
    bar: 'hello';
  }
}

console.log(fool);
console.log(fool2);
