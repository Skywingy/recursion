//1. loop

// program to generate fibonacci series in array using loop
/* function fibs1(){
const number = parseInt(prompt('Enter the number of terms: '));
console.log("fibs1 number", number);
let n1 = 0, n2 = 1, nextTerm;
let arr = [0, 1];

console.log('Fibonacci Series:');

for (let i = 2; i < number; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    console.log(nextTerm);
    arr.push(nextTerm);
}
console.log(`${number} times`,arr);
}

fibs1();

// program to generate fibonacci series up to a certain number
// take input from the user
function fibs2(){
const number = parseInt(prompt('Enter a positive number: '));
console.log("fibs2 number", number);
let n1 = 0, n2 = 1, nextTerm;
let arr = [0, 1, 1];
console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= number) {
    arr.push(nextTerm);
    // print the next term

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
    console.log(`populated till ${number}`, arr);
}
fibs2(); */

//2. recursion

function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

const nTerms = prompt('Enter the number of terms: ');

if(nTerms <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}
