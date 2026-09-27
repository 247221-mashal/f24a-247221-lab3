const digits = [2, 2, 1];

function getTotal(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


console.log(getTotal(digits));
function getLargest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(getLargest(digits));

function getCountBiggerThanFirst(arr) {
  let count = 0;
  const first = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > first) {
      count++;
    }
  }
  return count;
}

console.log(getCountBiggerThanFirst(digits));