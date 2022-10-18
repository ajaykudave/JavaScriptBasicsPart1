/* Datatypes:- datatype is tells that which type of data stored in variable but In javascript loosely typed language..means suppose we declare a variable which number in it but after second if i update its value and try to store string in it then it possible..this is called loosely type. */
//1.STRING
let x =5 +'a';
x="'Ajay'kudave";
x= " ";//blanck string

//example of backtick to print strings with single and double corse as it then we use backticks.
x=`'Ajay"'`
console.log(x);

//2.BOOLEAN its used in conditional statements or and comparision
console.log(10 > 20);

//3.ARRAY..its used to store similar type of elements in it.
let myArray =['ajay','vijay','tom']; //it string type of array
console.log(myArray[0])

//4.OBJECT..Its one type of datatype.
let myObject ={
    name : 'Ajay',
    age  : 25
};

//5.undefined when we declare a variable and we are not assign any value and print it then it will return undefined(due GEC as we study earlier)
let myVariable;
//const PI; // this will give us SyntaxError we have to declare and assign value at same line..so in case of const it will not provide undefined value.
console.log(myVariable);
//.................................
//typeof operator
console.log(typeof myVariable);

//This is called template literal ..to conate other variable value inside a string without + opertaotx=`Ajay +${myVariable}`;
//its worked in tilt
alert(`Hello ${x}`);
