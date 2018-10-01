function arrayDiff() {
  var newArr = [];
  var newObj = {};

  const mergedArr = arr1.concat(arr2);

  mergedArr.forEach((item, idx) => {
    newObj[item] ? (newObj[item] = false) : (newObj[item] = item);
  });

  Object.values(newObj).forEach((item, idx) => {
    item && newArr.push(item);
  });
  return newArr;
}
