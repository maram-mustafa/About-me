'use strict';


let userName = prompt('please enter your name!');
alert('welcome to my website ' + userName);

function questionOne (){
let qusOne = prompt('Do you think my name is maram ?!');
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
}
questionOne();


function questionTwo(){
let qusTwo = prompt('Do you think I studied programming ?');
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
}
questionTwo();


function questionThree(){
let qusThree = prompt('Is the University of Jordan the one that I studied at or not?');
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
}
questionThree();


function questionFour(){
let qusFour = prompt('Do you think I got certificates in another field of IT?');
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
}
questionFour();



function questionFive(){
let qusFive = prompt('Do you think the first field I got deeper into was programming?');
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
}
questionFive();



function questionSix(){
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
}}
questionSix();
alert('You exhausted your 4 attempts, correct answer # 4');

            
function questionseven (){
    let talent = ['dancing','reading','acting','singing','painting'];
    let answer = prompt('can you guess one of talents?');
  
    for(let i=0;i<6;i++){
      for(let j=0;j<talent.length;j++){
        if (answer.toLowerCase() === talent[j]){
          alert('correct .. you guess one');
          score+=1;
          i=j;
          break;
        }
      }
      if(answer.toLowerCase() === talent[i]){
        break;
      }
      if(i===5){
        alert('sorry! that is a wrong answer, the correct answers -> :  '+ talent);
        break;
      }
      answer = prompt('wrong answer, please try another guess?');
    }
  }
  questionseven();
  alert('okey, your score is '+score+' out of 7');
