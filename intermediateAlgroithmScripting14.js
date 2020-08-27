function smallestCommons(arr) {
    // Sort array from greater to lowest
    // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
    arr.sort(function(a, b) {
      return b - a;
    });
  
    // Create new array and add all values from greater to smaller from the
    // original array.
    var newArr = [];
    for (var i = arr[0]; i >= arr[1]; i--) {
      newArr.push(i);
    }
  
    // Variables needed declared outside the loops.
    var quot = 0;
    var loop = 1;
    var n;
  
    // Run code while n is not the same as the array length.
    do {
      quot = newArr[0] * loop * newArr[1];
      for (n = 2; n < newArr.length; n++) {
        if (quot % newArr[n] !== 0) {
          break;
        }
      }
  
      loop++;
    } while (n !== newArr.length);
  
    return quot;
  }
  
  // test here
  smallestCommons([1, 5]);
  
  
  console.log(smallestCommons([1,5]));


//   Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
//   as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible 
// by all numbers between 1 and 3. The answer here would be 6.