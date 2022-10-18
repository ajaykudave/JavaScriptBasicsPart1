/* alert():-this function is used to show some message only. and it will not allowed to click anywhere outside that alert box till we will not clicked on that ok button.Once we clicked on Ok button it will close that alert window. */

alert('Good Morning..Today i learned everything about Javascript and i clear interview and also master and able to write JS and Node ..Im so happy');

/* 2)prompt(): this will used to take input from users.And when you enter value in this box and click on ok button then it will close that window and return that entered value ..and when you when you enterd value or not enterd any value and directly click on cancel button it will close window and return NULL value. */

let age =prompt('Enter a Age');

let message = (age != null) ? `Your Age is ${age}` : `Age field is blank :${age}`;

document.write('<h1>'+message+'</h1>');

/* confirm():-this function is of boolean type and it ask user or used for confirmation if user click on ok button it will close window and return TRUE value and if click on cancel Button then it will return FALSE value */

let isTrue = confirm('Are your sure');
document.write('<h1>'+isTrue+'</h1>');

/* Problem statement :-Suppose a user want that prompt function textbox contain any default value to be displayed whenever it will pop up and its up to user whether he/she want to change that value or keep as it it. */

let defaultValue =prompt('Enter a Blood Group','O+');
document.write('<h1>'+defaultValue+'</h1>')
