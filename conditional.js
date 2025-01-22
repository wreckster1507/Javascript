//conditional statements
// if else
// if else if
// switch case

// if else
if (true) {
    console.log('true');
} else {
    console.log('false');
}

// if else if
if (true) {
    console.log('true');
}
else if (false) {
    console.log('false');
}
else {
    console.log('none');
}

// switch case
let day = 'monday';
switch (day) {
    case 'monday':
        console.log('today is monday');
        break;
    case 'tuesday':
        console.log('today is tuesday');
        break;
    case 'wednesday':
        console.log('today is wednesday');
        break;
    case 'thursday':
        console.log('today is thursday');
        break;
    case 'friday':
        console.log('today is friday');
        break;
    case 'saturday':
        console.log('today is saturday');
        break;
    case 'sunday':
        console.log('today is sunday');
        break;
    default:
        console.log('not a valid day');
}

let age = prompt('Enter your age');
let name = prompt('Enter your name');
if (age < 18) {
    console.log('minor');
} else  if (age >= 35) {
    console.log('senior citizen');
} else {
    console.log('adult');
}
alert('Hello ' + name + ' you are ' + age + ' years old');

//write a program that reads thae scores A and B of two players and checks if one of the scores is greater than 300 and sum of the scores is less than 500
//input the first line of input contains an integer respresenting the score of player A, and the second line of input contains an integer representing the score of player B
//output the should be a single line containing a string. can team up should be printed if one of the scores is greater than 300 and sum of the scores is less than 500. otherwise, cannot team up should be printed 

let scoreA = prompt('Enter the score of player A');
let scoreB = prompt('Enter the score of player B');
if (scoreA > 300 && scoreB > 300 ||  scoreA + scoreB < 500) {
    console.log('can team up');
}
else {
    console.log('cannot team up');
}
