const flattenArray = (arr) => {
  var flatMap = [];
  arr.forEach((val) => {
      if (Array.isArray(val)) {
          flatMap = flatMap.concat(flattenArray(val)); 
      } else {
          flatMap.push(val);
      }
  });
  return flatMap;
}

let data = [[1,2,[3]], [4,5,6], 7];

console.log(flattenArray(data));