function palindrome(str) {
    var lowerCased = str.toLowerCase();
    console.log("to lower case:"+lowerCased);
    var replaced = lowerCased.replace(/[\W_]+/g, "");
    console.log("regexed:"+replaced);
    var arr = replaced.split("");
    var reversedArr = arr.reverse();
    var joinedAndReversed = reversedArr.join("");
    console.log("reversed:" + joinedAndReversed);
    if (joinedAndReversed === replaced) {
        return true;
    } else return false;

  }
  
  
  
  console.log(palindrome("0_0 (: /-\ :) 0-0"));