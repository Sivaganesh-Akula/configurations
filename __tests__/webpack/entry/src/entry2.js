const trignometryValues = (ratio, angle) => {
  const TRatioValues = {
    sin: {
      0: "0",
      30: "1/2",
      45: "1/√2",
      60: "√3/2",
      90: "1",
    },
    sec: {
      0: "1",
      30: "2/√3",
      45: "√2",
      60: "2/√3",
      90: "Infinity or Undefined",
    },
    tan: {
      0: "0",
      30: "1/√3",
      45: "1",
      60: "√3",
      90: "Infinity or Undefined",
    },
  };
  const revisedRatio =
    ratio === "cos"
      ? "sin"
      : ratio === "cot"
        ? "tan"
        : ratio === "cosec" || ratio === "csc"
          ? "sec"
          : ratio;

  const revisedAngle = ["cos", "cot", "cosec", "csc"].includes(angle)
    ? 90 - angle
    : angle;
  return (
    TRatioValues[revisedRatio][revisedAngle] ||
    "Unable to find the values with the inputs"
  );
};

console.log(trignometryValues("sin", 45));
console.log(trignometryValues("cosec", 90));
