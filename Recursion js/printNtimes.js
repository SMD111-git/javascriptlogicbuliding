// i will try to write code in js  and as well as in java
//```javascript```
const a = (i, n) => {
  if (i > n) return;
  console.log(`SMD ${i} ,${n}`);
  a(i + 1,n);
};
let n = 4;
let i = 1;
a(i, n);
