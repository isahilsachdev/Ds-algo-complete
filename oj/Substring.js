const str = 'example';

const buildSubstrings = (str = '') => {
  let i, j;
  const res = [];
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      res.push(str.slice(i, j));
    }
  }
  return res;
};
console.log(buildSubstrings(str));
