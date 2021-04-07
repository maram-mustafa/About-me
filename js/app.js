'use strict';

let userName = prompt('please enter your name!');
alert('welcome to my website ' + userName);


let qusOne = prompt('Do you think my name is maram ?!');
//console.log(qusOne);
//alert(qusOne);
qusOne = qusOne.toLowerCase();

switch(qusOne){
    case 'yes':
    case 'y':
        alert('yes! my name is maram');
        break;

    case 'no':
    case 'n':
        alert('Wrong answar');
        break;

        default:
        alert ('please input a valid value');
        
}

let qusTwo = prompt('Do you think I studied programming ?');
//console.log(qusTwo);
//alert(qusTwo);
qusTwo = qusTwo.toLowerCase();

switch(qusTwo){
    case 'yes':
    case 'y':
        alert('yes! programming is my fild of study');
         break;

    case 'no':
    case'n':
        alert('wrong answar');
        break;

    default:
        alert('please input a valid value');

}



let qusThree = prompt('Is the University of Jordan the one that I studied at or not?');
//console.log(qusThree);
//alert(qusThree);
qusThree = qusThree.toLowerCase();

switch(qusThree){
    case 'yes':
    case 'y':
        alert('yes! im studied in the university of jordan');
        break;

    case 'no':
    case 'n':
        alert('Wrong answar');
        break;

        default:
            alert('please input a valid value');
            break;
}

let qusFour = prompt('Do you think I got certificates in another field of IT?');
//console.log(qusFour);
//alert(qusFour);
qusFour = qusFour.toLowerCase();

switch(qusFour){
    case 'yes':
    case 'y':
        alert('yes, i took a certificates in ccna');
        break;

    case 'no':
    case 'n':
        alert('Wrong answar');
        break;

        default:
            alert('please input a valid value');
            break;
}



let qusFive = prompt('Do you think the first field I got deeper into was programming?');
//console.log(qusFive);
//alert(qusFive);
qusFive = qusFive.toLowerCase();

switch(qusFive){
    case 'yes':
    case 'y':
        alert('Wrong answar');
        break;

    case 'no':
    case 'n':
        alert('Unfortunately yes, it was not the first field');
        break;

        default:
            alert('please input a valid value');
            break;
}

alert('Thanks for visiting my site ' + userName);



for (let i = 0; i < 4; i++) {
    let number = 4;
    let guess = prompt('guess a number!');

    if (parseInt(guess) === parseInt(number)) {
        alert('YOU GOT IT RIGHT');
        break;

    } else if (parseInt(guess) > parseInt(number)) {
        alert('TOO HIGH! GUESS AGAIN!');

    } else if (parseInt(guess) < parseInt(number)) {
        alert('TOO LOW! GUESS AGAIN');

    } else {
        alert('ENTER A NUMBER');

    }
}
alert('You exhausted your 4 attempts, correct answer # 4');


 
let score = 0;
let talent = ['dancing', 'acting', 'singing', 'painting', 'reading', ];
let answer= null;
    for (let x = 0; x < 6 ; x++) {
       answer = prompt('guess one of the talents ?!');
        answer= answer.toLowerCase();
        for(let y= 0 ; y< talent.length; y++){

            if(answer === talent[y]){
                alert('correct '  );
                score++;
                alert('your score ' + score);
                y=50;
            
            }
        }
        
        
    
        if (x === 5){
            alert('you didnt answer correct ');
        }
    
}
<<<<<<< HEAD



    








=======
 questionSeven();
>>>>>>> a8153ae1ea2322a56931caccd0baf3dd7eec4e1d


//Hello World
// New Comment









 