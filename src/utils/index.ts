import { lengthWish } from "./types";

export const ROOT_SIZE = 37.5;

export const px2rem = (px: number): string => {
  return (px / ROOT_SIZE).toFixed(4) + "rem";
};

export const errorCaptured = async (asyncFunc: () => void) => {
  try {
    const res = await asyncFunc();
    return [null, res];
  } catch (error) {
    return [error, null];
  }
};

export const toString = Object.prototype.toString;

export const cloneDeep: <T extends lengthWish>(data: T) => T = (data) => {
  let result;

  if (toString.call(data) === "[object Object]") {
    result = Object.create(null);
    for (let key in data) {
      result[key] = data[key];
    }
  } else if (toString.call(data) === "[object Array]") {
    result = [];
    for (let i = 0, len = data.length || 0; i < len; i++) {
      result.push(data[i]);
    }
  } else {
    result = data;
  }
  return result;
};
