import {getRandomNumberInRange} from './getRandomNumberInRange';

export const getRandomUniqueArr = <T>(
  arr: Array<T> = [],
  length: number,
): Array<T> => {
  if (arr.length <= length) {
    return arr;
  }

  const set = new Set<T>();
  let size = 0;

  while (size < length) {
    const ind = getRandomNumberInRange(arr.length - 1);
    set.add(arr[ind]);
    size = set.size;
  }

  return [...set];
};
