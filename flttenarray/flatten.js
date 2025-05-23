//flatten any array
const flatten = function (arr, result = []) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};

console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]]))