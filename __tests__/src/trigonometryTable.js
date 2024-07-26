import TRatioValues from "./constants";

const trignometryValues = (ratio, angle) => {
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
