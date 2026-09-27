const digits = [2, 2, 1];

function getTotal(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


console.log(getTotal(digits));