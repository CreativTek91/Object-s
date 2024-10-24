const betterTypeOf = (value) => {
  if (value === null) {
    return "null";
  } else if (Array.isArray(value)) {
    return "array";
  } else {
    return typeof value;
  }
};


console.log(betterTypeOf(42)); // "number"
console.log(betterTypeOf('Hello')); // "string"
console.log(betterTypeOf('null')); // "null"
console.log(betterTypeOf([1, 2, 3])); // "string"
console.log(betterTypeOf(["a", "b", "c"])); // "string"
console.log(betterTypeOf('Hello')); // "string"

const person = {
    fullnName: "Randy Smith",
    age: 32
};

console.log(betterTypeOf(person));