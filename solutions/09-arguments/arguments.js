function destroyer(arr, ...args) {
  let charMap = {};
  const destroyed = [];
  args.forEach((item, idx) => {
    charMap[item] = 1;
  });

  arr.forEach((item, idx) => {
    if (!charMap[item]) destroyed.push(item);
  });
  console.log(destroyed);
  // Remove all the values
  return destroyed;
}
