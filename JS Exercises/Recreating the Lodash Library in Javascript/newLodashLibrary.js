const _ = {
  
    // METHOD 1 ----> .clamp()
    clamp(number, lower, upper){
      if(lower >= upper){
        console.log("ERROR! " + lower + " is NOT lower than " + upper);
      }
      else{
        if(number <= lower){
          return lower;
        }
        else if(number >= upper){
          return upper;
        }
        else{
          return number;
        }
      }
    },
    // METHOD 2 ----> .inRange()
    inRange(number, start, end){
      // 1st step: Check if end is undefined
      // If this is true, end = start and start = 0
      if(end === undefined){
        end = start;
        start = 0;
      }
      // 2nd step: Check if start > end (we don't want this to be true)
      // If this is true, I will swap the values
      if(start > end){
        let temp = start;
        start = end;
        end = temp;
      }
      // 3rd step: Solution
      if(number < start || number >= end){
        return false;
      }
      else{
        return true;
      }
    },
    // METHOD 3 ----> .words()
    words(story){
      /*
      // First, I will find the 'spacebar characters', in order to split the words
      let spacebarIndex = [];  
      spacebarIndex.push(0);  // 0 means to begin from the 1st position
      for(let i=0; i<story.length; i++){
        if(story[i] === ' '){
          spacebarIndex.push(i);
        }
      }
      spacebarIndex.push(story.length);  // This means where the final word ends
      // Now, the array of 'spacebar characters' has all these indexes
      let result = [];
      for(let i=0; i<spacebarIndex.length-1; i++){
        str = "";
        for(let j=spacebarIndex[i]; j<spacebarIndex[i+1]; j++){
          str += story[j];
        }
        result.push(str);
      }
      return result;
      */
      return story.split(' ');
    },
    // METHOD 4 ----> .pad()
    pad(str, desiredLength){
      if(str.length >= desiredLength){
        return str;
      }
      else{
        let newStr = "";
        let padding = desiredLength - str.length;
        let halfPadding = padding / 2;
        if(halfPadding === Math.floor(halfPadding)){
          for(let i=0; i<halfPadding; i++){
            newStr += " ";
          }
          newStr += str;
          for(let i=0; i<halfPadding; i++){
            newStr += " ";
          }
        }
        else{
          let leftPadding = Math.floor(halfPadding);
          let rightPadding = leftPadding + 1;
          for(let i=0; i<leftPadding; i++){
            newStr += " ";
          }
          newStr += str;
          for(let i=0; i<rightPadding; i++){
            newStr += " ";
          }
        }
        return newStr;
      }  // END OF ELSE-CASE (desiredLength > length)
    },
    // METHOD 5 ----> .has()
    has(obj, key){
      // Key (the parameter) will be sth like string
      // 2nd param = input = 'name' for example
      // To access the value , I MUST DO:
      // obj[key], and now I can have access
      if(obj[key] != undefined){
        return true;
      }
      else{
        return false;
      }
    },
    // METHOD 6 ----> .invert()
    invert(obj){
      let newObj = {};
      for(let [key, value] of Object.entries(obj)){
        newObj[value] = key;
      }
      return newObj;
    },
    // METHOD 7 ----> .findKey()
    findKey(obj, predicate){
      for(let key in obj){
        let value = obj[key];
        let predicateReturnValue = predicate(value);
        if(predicateReturnValue){
          return key;
        }  
      }
      return undefined;
    },
    // METHOD 8 ----> .drop()
    drop(arr, num){
      let newArr = arr.slice();
      if(num === undefined){
        newArr.shift();
        return newArr;
      }
      else{
        for(let i=0; i<num; i++){
          newArr.shift();
        }
        return newArr;
      }
    },
    // METHOD 9 ----> .dropWhile()
    dropWhile(arr, predicate){
      let index = arr.findIndex((element, index) => {
        return (!predicate(element, index,  arr));
      });
      // I have the index, where this proposal is falsy
      // If index = 4, I will drop 4 elements (0,1,2,3)
      let result = this.drop(arr, index);
      return result;
    },
    // METHOD 10 ----> .chunk()
    chunk(arr, size){
      if(size === undefined){
        size = 1;
      }
      if(size >= arr.length){
        return arr;
      }
      // Begin to chunk (size = step in for-loop)
      let newArr = [];
      for(let i=0; i<arr.length; i+=size){
        let tempArr = [];
        for(let j=i; j<i+size; j++){
          if(j < arr.length){
            // This condition must be true, in order to avoid overflow of array indexes
            tempArr.push(arr[j]);
          }
          else{
            break;  // In other case, I have infinite loop
          }
        }  // END OF SECOND FOR-LOOP
        newArr.push(tempArr);
      }  // END OF FIRST FOR-LOOP
      return newArr;
    }
    
  };  // END OF OBJECT
  
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;
  // 1. Method .clamp()
  console.log();
  console.log("Method 1 ----> .clamp()");
  console.log("_.clamp(10, 11, 15) = " + _.clamp(10, 11, 15));
  console.log("_.clamp(16, 11, 15) = " + _.clamp(16, 11, 15));
  console.log("_.clamp(12, 11, 15) = " + _.clamp(12, 11, 15));
  
  // 2. Method .inRange()
  console.log();
  console.log("Method 2 ----> .inRange()");
  console.log("_.inRange(3, 1, 20) = " + _.inRange(3, 1, 20));
  console.log("_.inRange(1, 1, 20) = " + _.inRange(1, 1, 20));
  console.log("_.inRange(20, 1, 20) = " + _.inRange(20, 1, 20));
  console.log("_.inRange(3, 20, 1) = " + _.inRange(3, 20, 1));
  console.log("_.inRange(3, 1) = " + _.inRange(3, 1));
  console.log("_.inRange(3, 20) = " + _.inRange(3, 20));
  
  // 3. Method .words()
  console.log();
  console.log("Method 3 ----> .words()");
  console.log("_.words('Hello my friends! How was your day?') = ");
  console.log(_.words('Hello my friends! How was your day?'));
  
  // 4. Method .pad()
  console.log();
  console.log("Method 4 ----> .pad()");
  console.log("_.pad('hi', 6) becomes: ");
  console.log(_.pad('hi', 6));
  console.log("_.pad('hi', 5) becomes: ");
  console.log(_.pad('hi', 5));
  console.log("_.pad('hi', 1) becomes: ");
  console.log(_.pad('hi', 1));
  console.log("_.pad('hi', 2) becomes: ");
  console.log(_.pad('hi', 2));
  
  // 5. Method .has()
  console.log();
  console.log("Method 5 ----> .has()");
  console.log("~~~~~~~~~~ Example 1 ~~~~~~~~~~");
  console.log("_.has({");
  console.log("        id1: 5,");
  console.log("        id2: 1,");
  console.log("        phrase: 'think'");
  console.log("     }, 'name') = ");
  console.log(_.has({id1: 5, id2: 1, phrase: 'think'}, 'name'));
  console.log("~~~~~~~~~~ Example 2 ~~~~~~~~~~");
  console.log("_.has({");
  console.log("        name: 'Thomas',");
  console.log("        age: undefined,");
  console.log("        myKey: 2");
  console.log("     }, 'name') = ");
  console.log(_.has({name: 'Thomas', age: 20, myKey: undefined}, 'name'));
  console.log("~~~~~~~~~~ Example 3 ~~~~~~~~~~");
  console.log("_.has({");
  console.log("        name: 'Thomas',");
  console.log("        age: 20,");
  console.log("        something: 'undefined'");
  console.log("     }, 'name') = ");
  console.log(_.has({name: 'Thomas', age: 20, something: 'undefined'}, 'name'));
  console.log("~~~~~~~~~~ Examples end ~~~~~~~~~~");
  
  // 6. Method .invert()
  console.log();
  console.log("Method 6 ----> .invert()");
  console.log("_.invert({name:'Tom', surname:'Bouf'}) will be: ");
  console.log(_.invert({name:'Tom', surname:'Bouf'}));
  
  // 8. Method .drop()
  console.log();
  console.log("Method 8 ----> .drop()");
  console.log("_.drop([1,2,3,4,5,6,7,8,9,10], 3) = " + _.drop([1,2,3,4,5,6,7,8,9,10], 3));
  console.log("_.drop([1,2,3,4,5,6,7,8,9,10]) = " + _.drop([1,2,3,4,5,6,7,8,9,10]));
  
  // 10. Method .chunk()
  console.log();
  console.log("Method 10 ----> .chunk()");
  console.log("_.chunk([1,2,3,4,5,6,7,8,9,10], 2) = ")
  console.log(_.chunk([1,2,3,4,5,6,7,8,9,10], 2));
  console.log();
  console.log("_.chunk([1,2,3,4,5,6,7,8,9,10], 3) = ");
  console.log(_.chunk([1,2,3,4,5,6,7,8,9,10], 3));
  console.log();
  console.log("_.chunk([1,2,3,4,5,6,7,8,9,10]) = ");
  console.log(_.chunk([1,2,3,4,5,6,7,8,9,10]));
  console.log();
  console.log("_.chunk([1,2,3,4,5,6,7,8,9,10], 20) = ");
  console.log(_.chunk([1,2,3,4,5,6,7,8,9,10], 20));
  console.log();