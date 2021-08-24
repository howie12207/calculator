const toDecimalTwo = (value) => {
  return Math.round(value * 10000000000000) / 10000000000000 || 0;
};

export const plus = (prev, next) => {
  return toDecimalTwo(Number(prev) + Number(next));
};
export const minus = (prev, next) => {
  return toDecimalTwo(Number(prev) - Number(next));
};
export const times = (prev, next) => {
  return toDecimalTwo(Number(prev) * Number(next));
};
export const divide = (prev, next) => {
  return toDecimalTwo(Number(prev) / Number(next));
};
