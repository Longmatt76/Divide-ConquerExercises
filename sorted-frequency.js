

function sortedFrequency(arr, num) {
  let left = findLeft(arr, num);
  let right = findRight(arr, num);
 
  return right - left + 1;
}


function findLeft(arr, num) {
  if (arr[0] === num) {
    return 0;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < num) {
      left = mid + 1;
    } else if (
      arr[mid] > num ||
      (arr[mid] === num && arr[mid - 1] != num - 1)
    ) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function findRight(arr, num) {
  if (arr[arr.length - 1] === num) {
    return arr.length - 1;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < num) {
      left = mid + 1;
    } else if (arr[mid] === num && (mid === arr.length - 1 || arr[mid + 1] !== num)) {
      return mid;
    } else {
      right = mid;
    }
  }
  return -1;
}



module.exports = sortedFrequency;
