console.log('-----COMPARISION OPERATORS------');
console.log('-----------------1)== operator------------------------')
/* Comparision and Logical Operator */
//1. double equal to(==):it checks whether both left and right operand values are equal or not according it return boolean values..Let see eg.
let x = null;
let y ;//this means it has undefined value (learn in hoisting) and datatype also undefined
console.log(5 == 5); //true
console.log(5 == 6); //false
console.log(5 == '5'); //true..by our sense its false but == opeartor internally convert the conversion string to number ..so it not checks the datatype..therefore its called loose checking.

/* case1) if both operand have the same value but different datatype then it first internally convert one of them into same datatype and then return true

    case2)if both operand have the different value then directly it returns false.
*/
console.log(x == y);//true
console.log();
console.log('Converted number into boolean internally:-',true == 1);
/* in this case JS engine or browser considered 1 means true and 0 means false */
console.log('-----------------2)=== operator------------------------')
//2)triple equal to or strict equality operator(===):-It checks both value as well as datatypes of both operands if matches then only it return true otherwise return false.

console.log(5 === 5);//true
console.log(5 === '5');//false.first it matches the DT and after that matches values
console.log(5 === 6);//false
console.log(true === 1);//false
console.log(x === y); //false
/* it check x and y dt ..x is null type and y is undefined type ..so it return false. */


console.log('-------------3)!=(Not equal to) operator-----------------');
//3)NOT equal to (!=) Opeartor:- It checks whether both operand have different values or not according it returns true & false

console.log(5 != 6) //it only checks the both operand are different or not and not matches it datatype(dt) ..true
console.log(5 != 5);//false
console.log(5 != '5');//false..only matches value not equal or not
console.log(5 != '6');//true..internally it convert string into number
console.log(x != y);//false bec values are same

console.log('------4)!== strict inequality operator');
/*4)Strict inquality oerator:-

case1:-It return true if both operand have same datatype or different datatype but different value.

case2:-It return false if both operand have same datatype and same value.

Note:- also it not internally convert the datatype of the operands so even if the two operands have same value but different datatype so it return the true..i.e it first check both the datatype are not equal..condition true therefore whole true.

Note:-It check strictly datatype are not equal or not.if not then return true.
*/
console.log(5 !== 6);//true
console.log(5 !=='6');//true here first check dt not equal (true) as well as values are not equal (true).
console.log(5 !==5);//false
console.log(5 !=='5')//true..bec it satisfied that dt are not equal (number and string ..true)..therefore whole true..Opposite of ===

console.log(x !== y);//true..bec types are different

console.log('------5)greter than( > )operator-----------');
console.log( 10 > 5);//true..compare left operand with right
console.log(10 > 10);//false 
console.log(5 > 10);//false
console.log();
console.log('-------6)less than( < )operator-----------');
console.log(5 < 10);//true
console.log(5 < 5);//false
console.log(10 < 5);//false
console.log();
console.log('------5)greter than( >= )or equal to operator-----------');
console.log(10 >= 5);//true..OR(true or false = true)
console.log(10 >= 10);//true..because 10 is greter  than 10 is false but 10 is equal to 10 true..therefore true.
console.log();
console.log('------5)less than( <= )or equal to operator-----------');
console.log(5 <= 10);//true
console.log(5 <= 5);//true
console.log(10 <= 5);//false

console.log("------------LOGICAL OPERATORS------------------------");
//1)AND operator(&&):-if both the condition true then only it returns true else return false

console.log(5 < 10 && 10 >5);//true
console.log(5 < 4 && 5 < 10);//false..first false and second true..therfore false.
console.log();
//2)OR operator(||):-If any of the one condition evaluates true then it only it return true..else return false.
console.log('-------OR(||) Opertor-----------');
console.log(5 < 4 || 5 < 10);//true
console.log(5 < 10 || 10 >5);//true
console.log(5 < 4 || 10 <5);//false

console.log('-------NOt(!) Opertor-----------');
//3)NOT operator:-It reverse the result of conditions..i.e it make true to false and false to true.

console.log( !(10 > 5));//false.bec it make true to false
console.log( !(10 == 5));//true

