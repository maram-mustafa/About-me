'use strict';

let qusOne=prompt('Do you think my name is maram ?!');
console.log(qusOne);
qusOne= qusOne.toLowerCase();

switch(qusOne){
    case 'yes':
    case 'y':
        alert('yes! my name is maram')
        break;

    case 'no':
    case 'n':
        alert('Wrong answar')
        break;

        default:
        alert ('please input a valid value')
        break; 
}


let qusTwo=prompt('Do you think I studied programming or is it just a hobby?');
console.log(qusTwo);
qusTwo= qusTwo.toUpperCase();

switch(qusTwo){
    case 'yes':
    case 'y':
        alert('Correct! programming is my fild of study')
        break;
    
    case 'no':
    case 'n':
        alert('Wrong answar')
        break;

        default:
            alert('please input a valid value')
            break;
}


let qusThree=prompt('Is the University of Jordan the one that I studied at or not?')
console.log(qusThree);
qusThree= qusThree.toUpperCase();

switch(qusThree){
    case 'yes':
    case 'y':
        alert('yes! im studied in the university of jordan')
        break;

    case 'no':
    case 'n':
        alert('Wrong answar')
        break;

        default:
            alert('please input a valid value')
            break;
}

let qusFour=prompt('Do you think I got certificates in another field of IT?')
console.log(qusFour);
qusFour= qusFour.toUpperCase();

switch(qusFour){
    case 'yes':
    case 'y':
        alert('yes, i took a certificates in ccna')
        break;

    case 'no':
    case 'n':
        alert('Wrong answar')
        break;

        default:
            alert('please input a valid value')
            break;
}



let qusFive=prompt('Do you think the first field I got deeper into was programming?')
console.log(qusFive);
qusThree= qusThree.toUpperCase();

switch(qusFive){
    case 'yes':
    case 'y':
        alert('Wrong answar')
        break;

    case 'no':
    case 'n':
        alert('Unfortunately yes, it was not the first field')
        break;

        default:
            alert('please input a valid value')
            break;
}



