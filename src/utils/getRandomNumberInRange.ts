export const getRandomNumberInRange = (
  end: number,
  start: number = 0,
): number => {
  return Math.floor(Math.random() * (end - start) + start);
};
