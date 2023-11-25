export function calculateAbsolutePercentageDifference(
  a: number,
  b: number
): number {
  const absoluteDifference = Math.abs(a - b);
  const averageValue = (Math.abs(a) + Math.abs(b)) / 2;
  const percentageDifference = absoluteDifference / averageValue;
  return Math.abs(percentageDifference);
}
