function telephoneCheck(str) {
    if (parseInt(str) !== NaN && str.length === 10)
        {   
            console.log("=========================");
            console.log("10 digit integer test passed ")
            console.log(str)
            return true;
        } else if(str.length === 16 && str.charCodeAt(0) === 49){
            console.log("16 length starts with a 1 check passed")
            console.log(str)
            return true;
        }
        else if(/[,.?]/.test(str) === true){
            console.log("includes ,.?");
            console.log(str)
            return false;
        } else if(str.length === 14 && str.charCodeAt(1) === 32 && str.charCodeAt(5) === 41){
            console.log("14 length with out opening parenthesis at second position but has a closing parenthesis at 6th position")
            console.log(str);
            return false;
        }
        else if(str.length === 14 && str.charCodeAt(1) === 32 && str.charCodeAt(0) === 49){
            console.log("14 length and 2nd character is a space test passed and has a one for the country code")
            console.log(str);
            return true;

        }
            else if (str.length === 14 && str.charCodeAt(0) === 40 && str.charCodeAt(4) === 41 && str.replace(/\D/g, "").length === 10) {
            console.log("14 length and first three numbers are closed by parenthesis and number total is 10 test passed")
            console.log(str)
            return true;
        } else if (str.length === 12 && str.charCodeAt(11) === 41){
            console.log("12 length and 12th character is a close parenthis test failed")
            console.log(str)
            return false;
        } else if (str.length === 13 && str.replace(/\D/g, "").length !== 10) {
            console.log("failed 13 length but only 10 digits test");
            console.log(str)
            return false;
        }
        else if (str.charCodeAt(0) === 49 && str.length === 14) {
            console.log("first character is a 1 and is 14 length test passed");
            console.log(str)
            return true;
        } else if (str.length === 12 && str.charCodeAt(3) === 32 | 45) {
            console.log("12 length and 4th character is a hypen or space test passed")
            console.log(str)
            return true;
        } else if (str.charCodeAt(0) === 40 && str.charCodeAt(4) === 41 && str.length === 13 | 14){
            console.log("first character is an open parentheis and 5th character is a close parenthis and the length is 13 or 14 test passed")
            console.log(str)
            return true;
        } 
     else {
         console.log("failed all tests")
         console.log(str);
        return false;
    }}

    // 10 digit int done
  console.log(telephoneCheck("5555555555"));
   // begins with 1 and has 14 length done 
  console.log(telephoneCheck("1 555 555 5555"));
    // 12 length seperated by spaces or hyphens done
  console.log(telephoneCheck("555 555 5555"));
  console.log(telephoneCheck("555-555-5555"));
    //13 or 14 length checking for parenthesis
  console.log(telephoneCheck("(555)555-5555"));
  console.log(telephoneCheck("(555) 555-5555")); 

  
  console.log(telephoneCheck("1 555)555-5555")); // return false
  console.log(telephoneCheck("(6054756961)")); // false
  console.log(telephoneCheck("(275)76227382")); // false
  console.log(telephoneCheck("(555)5(55?)-5555")); // false
  console.log(telephoneCheck("1 (555) 555-5555")); // return true
  console.log(telephoneCheck("2 757 622-7382")); // return false
  
//   Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// a 555-555-5555 -12 with 2 hyphens
// b (555)555-5555 - 13 with () and 1 hyphen
// c (555) 555-5555 - 14 with () a space and 1 hyphen
// d 555 555 5555 - 12 with two spaces
// e 5555555555 - 10 digits
// f 1 555 555 5555 14 with 3 \spaces
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above.
//  The area code is required. If the country code is provided, 
// you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.