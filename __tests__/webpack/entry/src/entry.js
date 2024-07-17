const singleEntry = () => {
  return {
    sum: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => a / b,
    mod: (a, b) => a % b,
  };
};

const basicCalc = singleEntry();

console.log(basicCalc.sum(12, 55));
console.log(basicCalc.sub(12, 55));
console.log(basicCalc.mul(12, 55));
console.log(basicCalc.div(12, 55));
console.log(basicCalc.mod(12, 55));
