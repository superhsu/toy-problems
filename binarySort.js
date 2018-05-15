let bSort = function(arr) {

  let counter0 = 0, counter1 = 0; 

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
          counter1++; 
      } else {
          counter0++;
      }
  }

  for (let i = 0; i < counter0; i++) {
      arr[i] = 0; 
  }

  let end = arr.length - counter1; 

  for (let k = end; k < arr.length; k++) {
      arr[k] = 1; 
  }

  console.log(end);
  return arr; 
}

console.log(bSort([1,0,1,0,1,0,0,1]));