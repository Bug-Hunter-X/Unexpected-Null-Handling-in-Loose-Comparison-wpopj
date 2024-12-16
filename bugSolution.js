function foo(a, b) {
  const aVal = a === null ? 0 : a; //Handle Null or Undefined value by defaulting to 0
  const bVal = b === null ? 0 : b;//Handle Null or Undefined value by defaulting to 0 
  return aVal + bVal;
}

console.log(foo(1, null)); // Output: 1
console.log(foo(1, 2)); // Output: 3
console.log(foo(null,2)); // Output: 2
console.log(foo(null, null)); // Output: 0