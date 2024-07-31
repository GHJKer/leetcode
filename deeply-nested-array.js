const link = 'https://leetcode.com/problems/flatten-deeply-nested-array/'

function flatten(arr, n) {
  let deepCount = 0;

  function flatRecursive(arrInn, nInn) {
    let newArr = [];

    for (let i of arrInn) {
      if (Array.isArray(i)) deepCount++;
      if (Array.isArray(i) && deepCount <= n) {
        newArr.push(...flatRecursive(i,nInn));
      } else {
        newArr.push(i);
        if (Array.isArray(i)) deepCount--;
      }
    }

    deepCount--;
    return newArr;
  }
  return flatRecursive(arr, n);
}
