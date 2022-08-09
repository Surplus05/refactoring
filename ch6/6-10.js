import _ from "lodash";
const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

export function enrichReading(original) {
  // const result = { ...original}; // or Object.assign. 둘 다 얕은복사..

  const result = _.cloneDeep(original);
  result.baseCharge = claculateBaseCharge(result);
  result.texableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year)
  );
  return result;
}

function claculateBaseCharge(reading) {
  return baseRate(reading.month, reading.year) * reading.quantity;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}
