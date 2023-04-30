function findRotatedIndex(arr, val) {
  let pivot = findPivot(arr);
  if (val > arr[0] && val < arr[pivot]) {
    return binarySearch(arr, val, arr[pivot], arr[arr.length - 1]);
  } else {
    return binarySearch(arr, val, 0, arr[pivot - 1]);
  }
}

function binarySearch(arr, val, left, right) {
  if (arr.length === 0) return -1;
  if (val < arr[left] || val > arr[right]) return -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (val < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

function findPivot(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (mid < arr.length - 1 && arr[mid] > arr[mid + 1]) {
      return mid + 1;
    } else if (arr[low] <= arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}
