/* Function:- 
        what is function?function is the block(named) of code.(block mean there is curly brace and named block means that block i.e function have some name).
        why we need?functions are helps in situation where we need same code,in another place so rather building that same code again ,we reuse that code where we need i.e we call that function.
        
        FUNCTIONS are heart of Javascript.And JS follows functional programming..watch JSConf youtube video..FUnctional programming means whichever problem occur view in function perspective..like class and object(Object oriented programming JAVA)..

        create a small small modules or functions to resolve some problem...suppose we need to build calculator(+,-,*,/)so rather building same code for each operation ...we create one calculate function which accept another small(logic) function ..so basically everything in javascript is function

        Types: There are some predefined functions(Build or created by JS language) and some user defined functions(created by our own self or developer)

*/
/* example compare imperative style code ..i.e do this after that do this.. & with funtional style */

let a = 10;

let result = a *2;

console.log(`Double is ${result}`);
 
/* so we can see above code which print double and this is imperative style code ..now suppose if we want to calculate double of number in another place i.e after some 100 lines..then we need to write same logic again for different number...so here comes functions comes in picture..we wrap that code in named block and that is called FUNCTION. */

//this is function define(defination) or declaration
function double(){
    let a = 10;
    let result = a *2;
    console.log(`Double using function ${result}`);
}

//so we need to call that function with their identity or name
double();

/* parameter and argument:- parameter is entity(variable,func or flag) passed at the time of function defination...whereas argument is an actual value we pass at the time of function invocation or call..

    why we need?As we see above double function only calculate double of 2(hardcore number)..now suppose if we want to calculate double of any number we want so here comes parameter and arguments in piture..we require parameter(variable) to hold that argument(value) passed at the time of functions invocation.
*/

//function with parameter
function double(num){
    let result = num *2;
    console.log(`Double using function(parameter) ${result}`);
}
//function call with argument
double(5);

/* in above program we define 2 functions with different defination is that one function doesnot take any parameter(non parametriezed function) and another is parametriezed function but as like java here not work ..in JS engine it will will allocate space to the functions define at the end and ignore same function define before or above the parametrized function ..there when i call both function ..the above function call also go to the bottom function and hence it finds num = undefined value and print NaN    */
