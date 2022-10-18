/* Array :- Its is datastructure.its way of storing any type of data.String is array of characters..i.e string is made up of from sequence of character but it datatype is char value ='ajay'..therefore array mehods are similar use in string manipulation
*/

// there 2 ways to define an array:1)literal like variable declartion 2)by new 
let book = new Array();//this will create blank (zer elements) array.

book = new Array(3);//this is array declaration we only declare an array with its length(3 elements) after that we have to add elements to it.

book = new Array('Math','Physics','Bio');//so we declare and define an array at same line..we directly pass elements into an array contructor function.


/*
CASE1)suppose we have 4 different books and we should display that books ..so we first declare 4 variables who store names of 4 books and then we display them
*/
/* 
let book1 = "Math";
let book2 = "Physics";
let book3 = "Chemistry";
let book4 = "Biology";

//display math book..so we need to remember variable name in which math book is store.
console.log('FROM VARIABLE :',book1);

//To update value in variable 
//book2 = "IT";
//but here the problem comes that suppose we need to store 100 books then we need to create 100 variables and also we need to remember there name so whenever need but its not good way..so here comes the ARRAY in piture

//Syntax
let bookArray =['Math','Physics','Chemistry','Biology'];

/* Here we can see there is only one variable is used to store thats books.so no need to remember variable names and also memory efficiency increase 

//display Math
console.log('FROM ARRAY :',bookArray[0]);

// To update value in array
bookArray[1] = 'IT';
console.log("Array of Books :",bookArray);
 */
console.log();
console.log('--------------------Manipulation With an Array-------------');
//1)push() and unshift():-Both functions are used to add elements to an array but push function add elemets to the end of an array wheresas unshift function add element to the beginning of an array.

let bookArray =['Math','Physics','Chemistry','Biology'];
let previousLength =bookArray.length;
let newLengthAfterPush = bookArray.push('computer science');
console.log(newLengthAfterPush); //here we can see push() return type is number and it return the new length of an array.

/* Problem Statement :Suppose whenever we push element into an array we show message new element added. */

/* if(newLengthAfterPush > previousLength ){
    console.log('inside if');
// console.log(`New element added to an array :${bookArray[newLengthAfterPush]}`);
    console.log(bookArray);
}else{
    console.log('Nothing added!');
} */

bookArray.unshift('Cyber security');
console.log(bookArray);

//2)pop() and shift():-Both functions are used to remove element form an array but pop will removed element from an end of an array whereas shift() will remove element from an beginning of an array.

//pop() and shift() both will return an element place at an end and beginning of an array after the pop and shift executed .

console.log(`Element removed from End of an Array: ${bookArray.pop()}`); //this line executed pop() and after that pop() will return that element 

console.log(`Element removed from beginning of an Array: ${bookArray.shift()}`); //this line executed shift() and after that shift() will return that element 

//To remove all element from an array..to trick statement
bookArray =[];//this indicate blank array
console.log(`Array After remove all elements from an array ${bookArray}`);//so it will print blank
//OR
bookArray.length = 0;
console.log(`Array After remove all elements from an array ${bookArray}`);

//splice(indexFromwhichRemove ,countOfNumberOfElementToRemove):-now suppose we want remove element anywhere from an array (in between) rather pop and shift do
//splice function returns an array of an removed elements.

/*
let bookArray =['Math','Physics','Chemistry','Biology'];
now suppose i want to remove chemistry from an array
*/
let bookArray2 =['Math','Physics','Chemistry','Biology'];
console.log('Array Before splice function Applied :',bookArray2);
console.log(bookArray2.splice(1,1));//here we can see first 1 indicate from index 1 start remove operation and second 1 indicate that only one element to be removed from 1 st index ..and hence Physics removed

console.log(bookArray2.splice(1,2));//here we can see first 1 indicate from index 1 start remove operation and second argument i.e 2 indicate that only 2 elements to be removed from 1 st index ..and hence Chemistry and Biology removed 

console.log('Array after splice function applied :',bookArray2);
console.log();
console.log('---------------splice function-----------------------------------------');
/* 3)indexOf():-As we know this small example ,but if we have big size of an array and we have to retrieve the position number of an array element then here comes the indexOf() function */

let bookArray3 =['Math','Physics','Chemistry','Biology'];
let book5='Namste Js';//variable define
console.log(`index of an Biology element of an array : ${bookArray3.indexOf('Biology')}`);

/* 4)Array.isArray(array_name) :- this method is used to check whether it array or not.if it is an array then it will return an true else return ffalse..its static method that why call using Array class and its return type is boolean bec its return true or false */

console.log('Is bookArray3 an array ',Array.isArray(bookArray3));//return true because its an array
console.log('Is book5 is an array ',Array.isArray(book5));// return false because its not an array

/* 5)split():- this function is use to convert or split a String into array ..that is each word in string is stored as an element in an array and return that array and also whichever split parameter(eg.blank space " ",or any character) we provide that will also removed and remainnig will displayed*/

let stringBefore ="Hello , I love Javascript!";
let stringArrayAfter= stringBefore.split(' ');//here we provide blank space as parameter so whenever split find in that string split from that till next " " space occur.
console.log('String after split ',stringArrayAfter);

console.log();
console.log('------------------join()---------------------------');
/* 6)join(separator):- it creates an string using array element with default ,comma separted..actually returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
note :-for blank ,undefined or null as element in an array ,treat as blank value .
 ANd also it will not modify original array..so display an array after join function apply. */

console.log(' join() apply:',bookArray3.join());//return string with comma separator
console.log('Array after join,as we know it will not modify ',bookArray3);
console.log();
bookArray3.push(undefined,null);
console.log(bookArray3);
console.log(' join() apply:',bookArray3.join('-'));//as we can see it will treat as blank space
console.log(' join() apply:',bookArray3.join(' '));//separator is blank space

/* 7)concate():- to join one or more array */
let bookPrices =[1000,200,500];

console.log(bookArray3.concat(bookPrices));//this will return an new array without modifying original array

console.log();
console.log('------------MULTIDIMENSIIONAL ARRAY-------------');
/* Array inside an array is called Multidimensional array. 1 dimention mean only x axis((simple array,simple straight line) ,2 dimention means x and y axis (diagrams draw on paper),3D means x,y,z axis we got real life view like(ball circle in 3d view from top bottom front back left and right siede view)

problem statement :suppose customer want books name with their price ..so here we can use Multi-D-Array.
*/

let bookMdArray = [
    ['Physics',500],
    ['Biology',1000],
    ['Javascript',2000]
];
//console.log(bookMdArray.concat(bookArray3));//display 2 d array
console.log(bookMdArray[1][1]);

let bookMdArray2 = [
    ['Physics',["500-pages","500rs"]], //-0th element=>[0,[0,1]] 
    ['Biology',["700-pages","700rs"]], //1st index element
    ['Javascript',["500-pages","500rs"]] //
]

//display the biology book price
console.log(`price of Bilogy Book is ${bookMdArray2[1][1][1]}`);



