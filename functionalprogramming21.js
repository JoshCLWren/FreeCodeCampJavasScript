function checkPositive(arr) {
    // Only change code below this line
    return arr.every(function(currentValue) {
        return currentValue > 0;
    })
  
    // Only change code above this line
  }


console.log(checkPositive([1, 2, 3, -4, 5]));


// Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.

