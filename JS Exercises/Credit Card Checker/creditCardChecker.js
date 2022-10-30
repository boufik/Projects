// ******************************************************************** DATA **************************************************************************************************
// ******************************************************************** DATA **************************************************************************************************
// ******************************************************************** DATA **************************************************************************************************
// ******************************************************************** DATA **************************************************************************************************
 
 
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];
 
// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];
 
// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];
 
// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];
 
 
// *********************  FUNCTION 1  ****************************************************************************************************************************************
// *********************  FUNCTION 1  ****************************************************************************************************************************************
// *********************  FUNCTION 1  ****************************************************************************************************************************************
// *********************  FUNCTION 1  ****************************************************************************************************************************************
 
 
// Add your functions below:
function validateCred(arr){
  // Luhn Algorithm
  /*
  The formula verifies a number against its included check digit, which is usually appended to a partial account number to generate the full account number. This number must pass the following test:
 
  From the rightmost digit (excluding the check digit) and moving left, double the value of every second digit. The check digit is neither doubled nor included in this calculation; the first digit doubled is the digit located immediately left of the check digit. If the result of this doubling operation is greater than 9 (e.g., 8 × 2 = 16), then add the digits of the result (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9) or, alternatively, the same final result can be found by subtracting 9 from that result (e.g., 16: 16 − 9 = 7, 18: 18 − 9 = 9).
  Take the sum of all the digits.
   If the total modulo 10 is equal to 0 (if the total ends in zero) then the number is valid according to the Luhn formula; otherwise it is not valid.
  */
  let sum = 0;
  for(let i=arr.length-1; i>=0; i--){
      if((arr.length - 1 - i) % 2 === 0){
          // DONT DOUBLE
          sum += arr[i];
      }
      else{
          // DOUBLE
          let element = 2 * arr[i];
          if(element < 10){
              sum += element;
          }
          else{
              sum += (element - 9);
          }
      }
  }  
 
  if(sum % 10 === 0){
      return true;
  }
  else{
      return false;
  }
 
}
 
// Test functions:
console.log("Checking Function 1: ValidateCred(arr)");
console.log(validateCred(valid1)); // Should print true
console.log(validateCred(invalid1)); // Should print false
console.log();
console.log();
 
 
// **********************************************  FUNCTION 2  ***************************************************************************************************************
// **********************************************  FUNCTION 2  ***************************************************************************************************************
// **********************************************  FUNCTION 2  ***************************************************************************************************************
// **********************************************  FUNCTION 2  ***************************************************************************************************************
 
 
function findInvalidCards(nestedArray){
    let invalidArray = [];
    for(let i=0; i<nestedArray.length; i++){
        if(validateCred(nestedArray[i]) == false){
            invalidArray.push(nestedArray[i]);
        }
    }
    return invalidArray;
}
 
// Test functions:
console.log("Checking Function 2: findInvalidCards(nestedArray)");
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers
console.log();
console.log();
 
 
// ***********************************************************************  FUNCTION 3  **************************************************************************************
// ***********************************************************************  FUNCTION 3  **************************************************************************************
// ***********************************************************************  FUNCTION 3  **************************************************************************************
// ***********************************************************************  FUNCTION 3  **************************************************************************************
 
 
 
function idInvalidCardCompanies(card){
    companies = [];
    let firstIndex = card[0];
    switch(firstIndex){
         case 3:
            companies.push('Amex');
            break;
        case 4:
            companies.push('Visa');
            break;
        case 5:
            companies.push('Mastercard');
            break;
        case 6:
            companies.push('Discover');
            break;
        default:
            companies.push('Company not found');
            break;
    }
   
    // Now, companies array contains duplicates of each company
    // One example ----> companies = ['visa', 'amex', 'amex', 'discover', 'mastercard', 'discover', 'visa', 'amex', 'discover', 'discover']
    companies.sort();
    // Our array is clastered ---> so the same elements will be nearby
    // One example ----> companies = ['amex', 'amex', 'amex', 'discover, 'discover, 'discover, 'discover, 'mastercard', 'visa', 'visa']
    for(let i=0; i<companies.length-1; i++){
        if(companies[i] === companies[i+1]){
            companies.splice(i,1);
        }
    }
    return companies;  
}
 
 
 
// Test functions:
console.log("Checking Function 3: idInvalidCardCompanies(card)");
console.log(idInvalidCardCompanies(invalid1)); // Should print['visa']
console.log(idInvalidCardCompanies(invalid2)); // Should print ['mastercard']
console.log(idInvalidCardCompanies(invalid3)); // Should print['amex']
console.log(idInvalidCardCompanies(invalid4)); // Should print ['discover']
console.log(idInvalidCardCompanies(invalid5)); // Should print ['mastercard']
 
// I will check the mystery cards
mystery = [mystery1, mystery2, mystery3, mystery4, mystery5];
console.log();
console.log("Mystery array has these invalid cards: ");
let invalidMysteryCards = findInvalidCards(mystery);
for(let i=0; i<invalidMysteryCards.length; i++){
    console.log("Card " + invalidMysteryCards[i] + " ----> Company: " + idInvalidCardCompanies(invalidMysteryCards[i]));
}