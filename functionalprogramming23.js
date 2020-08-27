function add(x) {
    // Only change code below this line
    return function(y){
        return function(z){
            return x + y + z;
        }
    }
  
    // Only change code above this line
  }

  let ghin = add(2);
  console.log(ghin(3)(3));
  console.log(add(10)(20)(30));

  
//     Fill in the body of the add function so it uses currying to add parameters x, y, and z.

//Un-curried function
