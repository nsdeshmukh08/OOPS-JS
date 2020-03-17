/*
    - It allows object to club both Public and Private member.
    - In JS you can achieve Encapsulation by closure.
*/

function RBInterest(){
    
}

RBInterest.prototype.getInterestForAllBank = function(){
    // Private Space
    const minInterest = 6;

    //Public space
    return {
        interestForBOM : function(interest){
            return minInterest + interest;
        },
        interestForYesBank : function(interest){
            return minInterest + interest;
        }
    }

}

var BankInterestObj = new RBInterest();

console.log("====>", BankInterestObj.getInterestForAllBank().interestForBOM(2));
