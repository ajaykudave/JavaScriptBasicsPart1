//Suppose if we input variable value = y,yes or 1 then print message continue..if input variable value = n,no or 0 then print message End

//first see using if else ladder
let input = 'yes';

/* if(input === 1){
    document.write('continue..');
}
else if(input === 'y'){
    document.write('continue..');
}
else if(input === 'yes'){
    document.write('continue..');
}
else if(input === 0){
    document.write('End..');
}
else if(input === 'n'){
    document.write('End..');
}
else if(input === 'no'){
    document.write('End..');
}
else{
    document.write('Enter appropriate input.');
} */
//As we can see its not readable and take so many lines..so optimization of memory is less
//so now use switch
//switch checks strict double equal to.Internally
/* switch(input){

    case 1:
        document.write('continue..');
        break;
    case 'y':
        document.write('continue..');
        break;
    case 'yes':
        document.write('continue..');
        break;
    case 0 :
        document.write('End..');
        break;
    case 'n':
        document.write('End..');
        break;
    case 'no':
        document.write('End..');
        break;
   default:
    document.write('Enter Appropriate Input..');
    break;
} */
//Due to switch code is more readle and efficient.
/* break:-it stops the further lines or cases to execute and jump from current block i.e from switch(exit from switch) .If we avoid writing break in any case then it will execute next case ..that is called fall through .only there is not need to add break in deafult case only (optional)

default:Its like else part in IF Else.we can write default at any sequence we can wtite in bw or at top ..it behaves same

Now i modify above code 
*/
switch(input){

    case  1:
    case 'y':
    case 'yes':
        document.write('continue..');
        break;
     case  0:
     case 'n':
     case 'no':
        document.write('End..');
        break;
    default:
        document.write('Enter Appropriate Input..');
}
//above is example of fallthrough