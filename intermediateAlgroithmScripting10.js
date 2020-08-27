function uniteUnique(arr) {
    var args = [...arguments];
    var newArr = [];
    for(var i = 0; i < args.length; i++){
        for(var j = 0; j < args[i].length; j++){
            if(!newArr.includes(args[i][j])){
                newArr.push(args[i][j]);
            }
        }
    }

    return newArr;
  }
  
  console.log("test1");
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


  
//   Intermediate Algorithm Scripting: Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.