/* Type conversion :-There is 2 type of conversion implicit (automatic or inetrnally) conversion and explicit conversion 

1)Implicit conversion:-In implicit conversion JS engine check first value type and according that it will assume or convert another value also in same type or if it in same type then it leave as it is.
*/
//Example

let expressionValue = 5 + null;
//expressionValue = "5" + 2;
//expressionValue = "5" - 2;
expressionValue = "5" * "Ajay";
console.log(expressionValue);
console.log(typeof expressionValue);
/* 
CASE1)
Now we can see JS Engine first check type of 5 i.e number after that see + operator and then it will convert null value type to number type(and place zero internally)..therefore we know 5+0 =5 

CASE2)
Now "5"+ 2 return 52 as String ..as we told ..first it check first type is of String then see + operator then it understood by itself it will be conacte operation and now 2 will converted into String type..therfore we get  output 52 rather 7

CASE3)
Now "5" - 2 return 3, because it see - operator has only one operation that is subtract numbers..so it will convert first 5 into number and perform subtraction

CASE4)
Now "5" * 2..return 10
now "5" * "ajay"..return NaN(not a number)..bec when JS engine see Multiplication operator then it Uses its Intilligence and decided to perform muliti and convert 5 into number but second value is of pure(exact) string then it will return NaN 
*/
console.log('---------------------------TO STRING--------------------------');
/* 2)Explicit conversion:- JS have some method ,we have to use that method and perform conversion according to our own..as per our need. */
//A)string().it will convert source type to destination type(i.e string).It is (Object) contructor (special function same like we learn in java) and its return type is String ..so we can create varibale and store its return value if neccessary.
/* 
CASE 1) number to string( 4 to "4")
CASE2) boolean to srting( true  to "true")
*/
let value = 4;
//value = true;//update value of value variable
console.log('BEFORE:');
console.log(typeof value);
console.log('AFTER:Value ='+String(value)+" "+"Type :",typeof String(value));//write both statement in one line
console.log('---------------------------TO NUMBER--------------------------');
//B)Number() it converts any type to Number type
/* 
CASE1)string to number (ajay to Number(NaN output value))
CASE2)boolean to number ( true to Number( 1))
*/
let stringToNumber ="Ajay";
stringToNumber = true;
console.log('BEFORE:');
console.log(typeof stringToNumber);
console.log('AFTER:Value ='+Number(stringToNumber)+" "+"Type :",typeof Number(stringToNumber));

console.log('---------------------------TO Boolean--------------------------');
//B)Boolean() it converts any type to Number type
/* 
CASE1)string to Boolean (ajay to Boolean(NaN output value))
CASE2)number to boolean (5 to boolean)
*/
let stringToBoolean ="Ajay";
stringToBoolean = -5;//it will assume all number as true except 0
stringToBoolean = 0; //it will print false
console.log('BEFORE:');
console.log(typeof stringToBoolean);
console.log('AFTER:Value ='+Boolean(stringToBoolean)+" "+"Type :",typeof Boolean(stringToBoolean));


/* let number = prompt('enter a first number',0);
console.log('Type of ',typeof number); // this will print in browsers console that Type of string
 */
/*NOTE:
Anything you take input from user in javascript is almost a STRING type..so suppose you take number as input from user through prompt fuction it is in String so we need to convert it first into number type then perform any arithmetic operation on it */
