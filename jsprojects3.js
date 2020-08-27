function rot13(str) {
    // 65-90 for capital letters
    var ciphered = [];
    for(var i = 0; i < str.length; i++){
      if (str.charCodeAt(i) > 77 && str.charCodeAt(i) < 91) {
        ciphered.push(str.charCodeAt(i) - 13);
      } else if (str.charCodeAt(i) <= 77 && str.charCodeAt(i) > 64){
        ciphered.push(str.charCodeAt(i) + 13);
      } else {
          ciphered.push(str.charCodeAt(i));
      }
  
      }
      return String.fromCharCode(...ciphered);
    }
    
  

  console.log(rot13("SERR PBQR PNZC"));