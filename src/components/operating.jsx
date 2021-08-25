const toDecimalTwo = (value) => {
  return Math.round(value * 10000000000000) / 10000000000000 || 0;
};

export const toThousand = (value) => {
  const parts = value.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
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
