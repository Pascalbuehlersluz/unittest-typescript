export function mean(numbers: number[]): number {
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  const mean: number = sum / numbers.length;
  return mean;
}

export function median(numbers: number[]): number {
  if (numbers.length === 0) {
    return NaN;
  }
  const sorted: number[] = numbers.sort();
  const middle: number = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return mean([sorted[middle - 1], sorted[middle]]);
  }
  return sorted[middle];
}
