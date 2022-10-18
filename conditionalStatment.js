let age =10;
let hasVoterId ='yes';//change this value to see the effct
//IF
// if(age >= 14){
//     alert('Eligible for Voting');
// }

//2)IF..else
/* if(age >=14 && hasVoterId =='yes')
{
    alert('You can vote.')
}
else {
    alert('You either under age or you dont have voter Id Card.')
}
 */


//3)if else if:- to resolve above problem that there is two possibilities but we combine them in one in one else
/* if(age >=14 && hasVoterId =='yes')
{
    alert('You can vote.')
}
else if(age >=14 && hasVoterId =='no0'){
    alert('Oops!..First get your Voter Id.')
}
else{
    alert('Please provide appropriate details.')
}
 */

//This else part just for any default message.

/* 4)Nested if else: if else inside another if */
//first i check it greter than 14..then inside if i also check whether that person have voter id or not
/* if(age >= 14){

    if(hasVoterId =='yes'){
        alert('You can vote.')
    }
    else{
        alert('Get your voter ID.')
    }
}
else{
    alert('You are Not eligible for Vote.');
}                       
 */
/* Problem statement :if your loggin then show user logged out button ..if user logged out then show login Button using if else and ternary operator*/

let isLoggedIn = 1; //0 means logged out ,1 means logged in

/* if(isLoggedIn == 1){
    console.log('LogOut');
    document.write('LogOut Button');
}
else{
    console.log('Login');
    document.write('Login Button');
}
 */

//using ternary operator solution of above
let option =(isLoggedIn == 1) ? 'LogOut Button' : 'Login Button';

console.log(option);
document.write(option);

console.log('--------------Nullish colliscing Operator(??)-------------');
//Nullish colliscing Operator:-it checks if left operand is null or undefined ..if its null/undefined then it return right side operand else return left side operand.

let statusValue =null ;//undefined value bec no assignment
//or let status = null;

alert(statusValue  ?? 'please provide value');