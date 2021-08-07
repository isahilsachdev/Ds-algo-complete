// calculate second largest no.
var arr = [1, 2, 3, 4, 5, 6, 9, 1, 2, 5, 6, 100, 22];

var last = 0;
var second = 0;

for (let key of arr) {
  if (key > last) {
    last = key;
  } else if (key > second) {
    second = key;
  }
}

console.log(second);
