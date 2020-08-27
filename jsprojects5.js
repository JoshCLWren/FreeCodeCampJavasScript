function checkCashRegister(price, cash, cid) {

    var tenderedCash = [];

    var changeDue = cash.toFixed(2) - price.toFixed(2);
    let totalCID = cid.reduce((sum, pair) => sum + pair[1], 0)
    const roundToHundredth = (value) => {
        return Number(value.toFixed(2));
      };

      

    function changeMaker(cid, changeDue){
        var empty = []
        var arr = []
        var obj = {}
        var newChange = 0;
        changeDue = Number(changeDue.toFixed(2));
        if (changeDue === 0){

            var openObj = {status: "OPEN", change: tenderedCash}
            return openObj;
        } 
        else if (changeDue >= 100 && cid[8][1] > 0){
            console.log("25")
            console.log(cid[0][1])
            var benjamins = (Math.floor(changeDue / 100) * 100) - cid[8][1];
            newChange = changeDue - benjamins
            if (benjamins > 0){tenderedCash.push(["ONE HUNDRED", benjamins])}
            return changeMaker(cid, changeDue - benjamins)
        } else if (changeDue >= 20 && cid[7][1] > 0){
            console.log("32")
            console.log(cid[0][1])
            var andrewJackson = Math.floor(changeDue / 20) * 20; //80
            if (andrewJackson > cid[7][1] ) { //80 > 60
                var newTwenty = cid[7][1]; // 60
                newChange = changeDue - newTwenty; 
                cid[7][1] = 0
                tenderedCash.push(["TWENTY", newTwenty])
                return changeMaker(cid, changeDue - newTwenty)
            }
                else {newChange = changeDue - andrewJackson};
            if (andrewJackson > 0){tenderedCash.push(["TWENTY", andrewJackson])}

            return changeMaker(cid, changeDue - andrewJackson)
        } else if (changeDue >=  10 && cid[6][1] > 0){
            console.log("47")
            console.log(cid[0][1])
            var alexanderHamilton = Math.floor(changeDue /10) * 10;
            if (alexanderHamilton > cid[6][1]){
                var newTen = cid[6][1];
                newChange = changeDue - newTen;
                cid[6][1] = 0
                tenderedCash.push(["TEN", newTen])
                return changeMaker(cid, changeDue - newTen)
            } else {
            newChange = changeDue - alexanderHamilton;
            }
            if (alexanderHamilton > 0){tenderedCash.push(["TEN", alexanderHamilton])}
            return changeMaker(cid, changeDue - alexanderHamilton)
        } else if (changeDue >=  5 && cid[5][1] > 0){
            console.log("62")
            console.log(cid[0][1])
            var lincoln = Math.floor(changeDue /5) * 5;
            if (lincoln > cid[5][1]){
                var newFive = cid[5][1];
                cid[5][1] = 0
                tenderedCash.push(["FIVE", newFive])
                return changeMaker(cid, changeDue - newFive)
            } else {
            newChange = changeDue - lincoln;
            }
            if (lincoln > 0){tenderedCash.push(["FIVE", lincoln])}
            return changeMaker(cid, changeDue - lincoln) 
        } else if (changeDue >=  1 && cid[4][1] > 0){
            console.log("76")
            console.log(cid[0][1])
            var washington = Math.floor(changeDue /1) * 1;
            if (washington > cid[4][1]){
                var newOne = cid[4][1];
                cid[4][1] = 0
                tenderedCash.push(["ONE", newOne])
                return changeMaker(cid, changeDue - newOne)
            }
            else {
            newChange = changeDue - washington;
            }
            if (washington > 0){tenderedCash.push(["ONE", washington])}   
            return changeMaker(cid, changeDue - washington)
        } else if (changeDue >=  .25 && cid[3][1] > 0){
            console.log("91")
            console.log(cid[0][1])
            var quarter = Math.floor(changeDue /.25) * .25;
            if (quarter > cid[3][1]){
                var newQuarter = cid[3][1]
                cid[3][1] = 0
                tenderedCash.push(["QUARTER", newQuarter])
                return changeMaker(cid, changeDue - newQuarter)
            }else{
            newChange = changeDue - quarter;
            }
            if(quarter > 0){tenderedCash.push(["QUARTER", quarter])}
            return changeMaker(cid, changeDue - quarter) 
        } else if (changeDue >=  .10 && cid[2][1] > 0){
            console.log("105")
            console.log(cid[0][1])
            changeDue = Number(changeDue.toFixed(2));

            var dime = Math.floor(changeDue /.1) * .1;
            if (dime > cid[2][1]){
                var newDime = cid[2][1];
                cid[2][1] = 0
                tenderedCash.push(["DIME", newDime])
                return changeMaker(cid, changeDue - newDime)
            } 
            else {
            newChange = changeDue - dime;
            }
            if(dime > 0){tenderedCash.push(["DIME", dime])}
            return changeMaker(cid, changeDue - Number(dime.toFixed(2))) 
        } else if (changeDue >=  .5 && cid[1][1] > 0){
            console.log("122")
            console.log(cid[0][1])
            var nickel = Math.floor(changeDue /.5) * .5;
            if(nickel > cid[1][1]){
                var newNickel = cid[1][1];
                cid[1][1] = 0;
                tenderedCash.push(["NICKEL". newNickel]);
                return changeMaker(cid, changeDue - newNickel)
            }
            else{
            newChange = changeDue - nickel;
            }
            if(nickel > 0){tenderedCash.push(["NICKEL", nickel])}
            return changeMaker(cid, changeDue - nickel) 
        } else if (cid[0][1] >= changeDue){
                console.log("137")
                console.log(cid)
                var newPenny = changeDue;
                cid[0][1] = 0;
                tenderedCash.push(["PENNY", newPenny])
                return {status: "OPEN", change: tenderedCash }


        } else {
            obj = {status:"INSUFFICIENT_FUNDS", change: empty}
            return obj
        }  
    }

    if (changeDue === 0){
        return {status: "CLOSED", change: []}
    } else if (changeDue === cid[0][1]) {
        return {status: "CLOSED", change: [["PENNY", changeDue], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
    } 
    else if (changeDue > totalCID) {
        return {status:"INSUFFICIENT_FUNDS", change: tenderedCash}
    } 
    else  { 
        return changeMaker(cid, changeDue)
    } 
    

  }
// running tests
//done
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) )
//should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
//done
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// should return {status: "INSUFFICIENT_FUNDS", change: []}.
//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
//should return {status: "INSUFFICIENT_FUNDS", change: []}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
//should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) );
//should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}




  
//   Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash),
// and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]