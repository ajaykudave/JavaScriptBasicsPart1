/* Loops : loop is used to execute some set of statement specified times or multiple time is called loop(repeat).
Tyepes:-while,do while,for
*/
console.log("---------------while loop_---------");
/* 

1)While loop: first check condition if true then only it allow to enter into its block.eg to print my name 10 times .we can write   console.log("I'm Ajay , i love Javascript"); 10 times but this takes line and suppose if we want to write same thing 100 times then we need to copy and paste..but its not good approach ..so we use loop
*/
/* let counter = 1;
while(counter <= 10){
    console.log("I'm Ajay , i love Javascript");
   counter++;
   //If we not provide limit (increment or decrement) then it will check and print same statement infinite times.
} */

//Now real life problem statement:-print 1 to 100 even numbers addition.
let sum=0,counter=1;

while(counter <=100){

    if(counter % 2 == 0){
        sum = sum + counter;
    }
    counter++;
}
console.log('Sum of Even Numbers(1 to 100):',sum);
console.log();


console.log("---------------Do while loop_---------");
/*
do while loop:- in do while loop execute atleast one time even if the first condtion is not satisfied(false condition).

*/
let num =2;
do{
    console.log('Execute Atleast One even condtion is false.')
    num++;
}while(num < 5);

console.log();
console.log("--------------Forloop_---------");
//for loop:- In for loop 3 things come in one line ,that is initialization ,condition check, and increment/decrement (counter)

let counter1 =1 ,sum1=0;
for(counter1 ; counter1 <=100; counter1++){
    if(counter1 % 2 == 0)
    {
        sum1 = sum1 + counter1;
    }
}
console.log('Sum using For loop:-',sum1);


