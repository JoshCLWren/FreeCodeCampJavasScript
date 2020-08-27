function dropElements(arr, func) {
    // drop them elements.
    var times = arr.length;
    for (var i = 0; i < times; i++) {
      if (func(arr[0])) {
        break;
      } else {
        arr.shift();
      }
    }
    return arr;
  }
  
  console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1}));
  

//   Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function 
//   func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

