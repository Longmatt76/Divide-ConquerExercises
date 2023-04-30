function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid - 1] > arr[mid] && arr[mid + 1] > arr[mid]) {
      return mid;
    } else if (arr[mid] > arr[arr.length - 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return mid;
}

module.exports = findRotationCount;
