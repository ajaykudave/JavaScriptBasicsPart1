/* break:-break is used to come out from current block and it will skip further code written for execution.or we can say unconditionally we come out from block */
/*Example :suppose we write one for loop which print some thing or execute some statement specified time..now see we use break ;
*/

/* let counter = 1;

function startStopwatch(breakvalue){
    
    for(counter;counter <=10;counter++){

        if(breakvalue == counter)
        {
            break;
        }
        console.log('\nExecuting..'+counter);
    }
}
startStopwatch(5); */
/* Now see our for loop run till 10 times i.e when counter value becomes 11 then condtion false then for loop terminated automatically now suppose we want that for exit at 5 th or userspecifed time then its possible using break..at 5 th iteration it will not execute any line aftre the if statement and come out from for loop(block) */

/* 
let sum =0,number;

while(true){

    number = parseInt(prompt('Enter a number'));

    //means if number is negative then come out from current block i.e from while loop
    if(number < 0)
    {
        break;
    }
    //if its not then make sum,agin ask or prompt enter number then add that previous integer with new integer continue till user enter any negative number
    sum = sum + number; //or sum += number;

}
console.log(`Sum is ${sum}`)
 */
console.log('------------continue keyword------------------');
/* continue :- continue is skip one iteration and jump to next iteration(increment part in for loop) and the one difference is common bw break and continue is that whenever JS Engine encounters break or continue statement it will skip further statement to be executed. */
//suppose we want that at some iteration or at some point statements are not executed then we use continue.

for(let i =1 ;i<=6; i++){

    if(i == 3){
        continue;
    }
    console.log('Iteration '+i);
}

/* Working:-
 i=1, then condition check(1 <= 6..true) then if statement check(1 ==3 false)then will not enter into if statement and print Iteration 1,then i++

 i=2,then conditon check(2 <= 6..true)then if statement check(2 == 3..fasle)then will not enter into if statement and print Iteration 2,then i++

 Now i =3 then condtion chek(3<=6..true)then if statement check(3==3..true)then enter into if statement and execute contine statement then it will move program control directly to increment part of for loop and skip Iteration 3 ,and i++

 i=4 then condition check(4 <= 6..true)then if statement check(4==3..false)then print Iteration 4 and i++(4+1=5)

 i=5 then contion check(5 <=6..true) then if statement check (5 == 3..false)then print Iteration 5 and i++(5+1=6)
 i=6 then condtion check(6 <=6..true) then if statement check (6 ==3 ..false) then print Iteration 6 and i++(6+1=7)
 i=7 then condition check(7 <=6 ..false)exit from for loop. 
*/

/* Problem Statement 2:-now suppose we have to print 1 2 3 4 5 6 and also after each digit also print any statement(2 times) like my name(we use nested loop) */
/* 
for(let i = 1; i<=6; i++){

    document.write(i);
    document.write('<br>');

    //nested for loop for printing statement
    for(let j=0; j<2; j++){
       
        if(i== 3)
        {
            break;//it will break current loop and control move to outer loop.and it will not print statements for iteration 3(i value 3)..because break unconditionally come out from that loop 

        }
        document.write('Ajay');
        document.write('<br>');
    }
}
 */
/* Now suppose we want to check how break work in nested loop..It actually exit from current loop i.e where its written or located. 
Now we can see inside inner for loop we check if i==3 then break so it doest not know which for loop should close so it will close inner loop where break resides or written.
*/
/* Problem statemt solution :now suppose if we want to exit from Outer loop then how it is possible ..this is possible using label ..copy and paste above code and add labels..*/

OuterLoop : for(let i = 1; i<=6; i++){

             document.write(i);
             document.write('<br>');

        //nested for loop for printing statement
     InnerLoop : for(let j=0; j<2; j++)
                 {
        
                    if(i== 3)
                    {
                        // syntax:--break <labelname>;
                        break OuterLoop;

                    }
                    document.write('Ajay');
                    document.write('<br>');
                }
    }

