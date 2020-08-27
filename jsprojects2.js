const romanNumerals = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
]
// I used a multidimensional array as objects can be problematic with what order they return in.

function convertToRoman(num){
    // I check to make sure the num is in the proper range of roman numerals and is in fact a number
    if (Number.isInteger(num) === false){
        console.log("Enter a number!");
        return false;
    }
        else if ((num > 3999 | num < 0 )){
            console.log("Romans only had numbers between 1 and 3999!");
            return false;
        } else if(num === 0){
            return ""
        }
        // I return this empty string each time it iterates because the function will eventually end at zero
        else {
            for (var i = 0; i < romanNumerals.length; i++)
            {
                if (num >= romanNumerals[i][0]){
                    return romanNumerals[i][1] + convertToRoman(num - romanNumerals[i][0])
                }
            }
    }
}
   
   console.log(convertToRoman(-1));
   console.log(convertToRoman(2));
   console.log(convertToRoman(3));
   console.log(convertToRoman(4));
   console.log(convertToRoman(5));
   console.log(convertToRoman(9));
   console.log(convertToRoman(12));
   console.log(convertToRoman(16));

//    JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
//    Convert the given number into a roman numeral.
   
//    All roman numerals answers should be provided in upper-case.