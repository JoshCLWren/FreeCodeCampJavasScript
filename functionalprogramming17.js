// Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. T
// he function should return a new array, and not mutate the globalArray variable.






var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
  // Only change code above this line
}
console.log(nonMutatingSort(globalArray));
