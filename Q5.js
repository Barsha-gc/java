// Find minimum and maximum number in an array.
function findMinMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return { min, max };
}
const numbers = [10, 5, 8, 21, 3, 17];
const result = findMinMax(numbers);
console.log("Minimum:", result.min);
console.log("Maximum:", result.max);
