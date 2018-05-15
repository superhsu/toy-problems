var bubbleSort = function(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[j] > array[j+1]) {
                var temp = array[j]
                var temp2 = array[j+1];
                array[j] = temp2;
                array[j+1] = temp; 
            }
      if (array[i] > array[i+1]) {
          var iTemp = array[i];
          var iTemp2 = array[i+1];
          array[i] = iTemp2;
          array[i+1] = iTemp;
    }
        }
    }
    return array;
  };

  console.log(bubbleSort([2,1,5,1,1,2,3,8]));

