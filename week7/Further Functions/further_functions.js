/*
//Function Properties and Methods
function square(x) {
    return x*x;
}
console.log(square.length)

function sayHello(){
    return `Hello, my name is ${ this.name }`;
}
const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };

console.log(sayHello.call(clark))
//<< 'Hello, my name is Clarke'

console.log(sayHello.call(bruce))
//<< 'Hello, my name is Bruce'

function sayHello(greeting='Hello'){
    return `${ greeting }, my name is ${ this.name }`;
}

console.log(sayHello.call(clark, 'How do you do'))
//<< 'How do you do, my name is Clark'

console.log(sayHello.call(bruce))
//<< 'Hello, my name is Bruce'

console.log(square.call(null, 4))
//<< 16

console.log(square.apply(null, [4]))
//<< 16
//Custom Properties
console.log(square.description = 'Squares a number that is provided as an argument')
//<< 'Squares a number that is provided as an argument'

function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
}
console.log(square(3))
//<< 9

console.log(square(-11))
//<< 121

console.log(square.cache)
//<< {"3": 9, "-11": 121}

//Immediately Invoked Function Expressions
/*(function() {
    const temp = 'World';
    console.log(`Hello ${temp}`);
})();
//<< 'Hello World'*/
/*
//Temporary Variables
let a = 1;
let b = 2;
console.log(a);
console.log(b);

(()=>{
    const temp = a;
    a = b;
    b = temp;
})();

console.log(a)
//<< 2

console.log(b)
//<< 1

//console.log(temp);
//<< Error: "temp is not defined"

let [c,d] = [1,2];
[c,d] = [d,c];

console.log(c);
//<< 2

console.log(d);
//<< 1

//Initialization Code
(function() {
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
    const date = new Date(),today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);

})();
//<< 'Welcome back Peter Parker. Today is Tuesday'

{
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
    const date = new Date(),today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
}
//<< 'Welcome back Peter Parker. Today is Tuesday'

(function() {
    'use strict';

// All your code would go inside this function

})();

//Creating Self-contained Code Blocks

(function() {
    // block A
    const name = 'Block A';
    console.log(`Hello from ${name}`);
    }());

    (function() {
    // block B
    const name = 'Block B';
    console.log(`Hello from ${name}`);
}());

//<<  Hello from Block A
//    Hello from Block B

//Functions that Define and Rewrite Themselves
function party(){
    console.log('Wow this is amazing!');
    party = function(){
        console.log('Been there, got the T-Shirt');
    }
}

party();
//<< 'Wow this is amazing!'

party();
//<< 'Been there, got the T-Shirt'

party();
//<< 'Been there, got the T-Shirt'

function party(){
    console.log('Wow this is amazing!');
    party = function(){
        console.log('Been there, got the T-Shirt');
    }
}

const beachParty = party; // note that the party function has not been invoked

beachParty(); // the party() function has now been redefined, even though it hasn't been called explicitly
//<< 'Wow this is amazing!'

party(); 
//<< 'Been there, got the T-Shirt'

beachParty(); // but this function hasn't been redefined
//<< 'Wow this is amazing!'

beachParty(); // no matter how many times this is called it will remain the same
//<< 'Wow this is amazing!'

//Init-Time Branching

function ride(){
    if (window.unicorn) { 
        ride = function(){
        // some code that uses the brand new and sparkly unicorn methods
        return 'Riding on a unicorn is the best!';
        }
    } else {
        ride = function(){
        // some code that uses the older pony methods
        return 'Riding on a pony is still pretty good';
        }
    }
    return ride();
};
console.log(ride()); // the function rewrites itself, then calls itself
//<< 'Riding on a pony is still pretty good'

console.log(ride);
//<< function ride() {
  //  return 'Riding on a pony is still pretty good';
    //}

//Recursive Functions
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};
console.log(factorial(4));

function collatz(n, sequence=[n]) {
    if (n === 1){
        return `Sequence took ${sequence.length} steps. It was ${sequence}`;
    }

    if (n%2 === 0) {
        n = n/2;
    } else { 
        n = 3*n + 1;
    }

    return collatz(n,[...sequence,n]);
};

console.log(collatz(18));
//<< 'Sequence took 21 steps. It was 18,9,28,14,7,22,11,34,17,52,26,13,40,20,10,5,16,8,4,2,1'
/*
//Callbacks
function wait(message, callback, seconds){
    setTimeout(callback,seconds * 1000);
    console.log(message);
};
function selfDestruct(){
    console.log('BOOOOM!');
};
wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not ... ?');

//<< 'This tape will self-destruct in five seconds ... '
//<< 'Hmmm, should I accept this mission or not ... ? '
//<< 'BOOOOM!'

wait('This tape will self-destruct immediately ... ', selfDestruct, 0);
console.log('Hmmm, should I accept this mission or not ... ?');

//<< 'This tape will self-destruct immediately ... '
//<< 'Hmmm, should I accept this mission or not ... ?'
//<< 'BOOOOM!'

//Promises
/*
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
};
const promise = new Promise( (resolve,reject) => {
    const n = dice.roll();
    setTimeout(() => {
        (n > 1) ? resolve(n) : reject(n);
    }, n*1000);
});
console.log(promise);

promise.then( result => console.log(`Yes! I rolled a ${result}`), result => console.log(`Drat! ... I rolled a ${result}`) );

promise.then( result => console.log(`I rolled a ${result}`) )
            .catch( result => console.log(`Drat! ... I rolled a ${result}`) );*/
/*
const dice = {
    sides: 6,
        roll() {
            return Math.floor(this.sides * Math.random()) + 1;
        }
    }
    
    console.log('Before the roll');
    
    const roll = new Promise( (resolve,reject) => {
        const n = dice.roll();
        if(n > 1){
            setTimeout(()=>{resolve(n)},n*200);
        } else {
            setTimeout(()=>reject(n),n*200);
        }
    });
    
    roll.then(result => console.log(`I rolled a ${result}`) )
    .catch(result => console.log(`Drat! ... I rolled a ${result}`) );
    
    console.log('After the roll');
    */

    //Async Functions
    /*async function loadGame(userName) {

        try {
            const user = await login(userName);
            const info = await getPlayerInfo (user.id);
            // load the game using the returned info
        }
    
        catch (error){
            throw error;
        }
    }*/
/*
    //Generalized Functions
    function random(a,b=1) {
        // if only 1 argument is provided, we need to swap the values of a and b
        if (b === 1) {
            [a,b] = [b,a];
        } 
        return Math.floor((b-a+1) * Math.random()) + a;
    }
    
    console.log(random(6));
    //<< 4
    
    console.log(random(10,20));
    //<< 13

    function square(n) {
        return n*n;
    };
    /*
    function random(a,b,callback) {
        if (b === undefined) b = a, a = 1; // if only one argument is supplied, assume the lower limit is 1
            const result = Math.floor((b-a+1) * Math.random()) + a
        if(callback) {
            result = callback(result);
        }
        return result;
    };
    */
    /*
    console.log(random(1,10,square));
    //<< 49

//Functions That Return Functions
function returnHello() {
    console.log('returnHello() called');
    return function() {
        console.log('Hello World!');
    }
};
console.log(returnHello());
//<< returnHello() called

const hello = returnHello();
//<< returnHello() called

hello()
//<< Hello World!

function greeter(greeting = 'Hello') {
    return function() {
        console.log(greeting);
    }
}

const englishGreeter = greeter();
englishGreeter();
//<< Hello

const frenchGreeter = greeter('Bonjour');
frenchGreeter();
//<< Bonjour

const germanGreeter = greeter('Guten Tag');
germanGreeter();
//<< Guten Tag

//Closures
const outside = 'In the global scope';
function fn() {
    const inside = 'In the function scope';
}

console.log(outside)
//<< 'In the global scope'
/*
console.log(inside)
//<< ReferenceError: inside is not defined
*/
/*
function outer() {
    const outside = 'Outside!';
    function inner() {
        const inside = 'Inside!';
        console.log(outside);
        console.log(inside);
    }
    console.log(outside);
    inner();
}

outer()
//<< Outside!
//Inside!
//Outside!

//Returning Functions
function outer() {
    const outside = 'Outside!';
    function inner() {
        const inside = 'Inside!';
        console.log(outside);
        console.log(inside);
    }
    return inner;
}
const closure = outer();
closure();
//<< Outside!
//Inside!
*/
//A Practical Example
function closure() {
    const a = 1.8;
    const b = 32;
    return c => c * a + b;
};

const toFahrenheit = closure();

console.log(toFahrenheit(30));
//<< 86

//A Counter Example
function counter(start){
    let i = start;
    return function() {
        return i++;
    }
};
const count = counter(1);
console.log(count());
//<< 1
console.log(count());
//<< 2

//Generators
function* fibonacci(a,b) {
    let [ prev,current ] = [ a,b ];
    while(true) {
        [prev, current] = [current, prev + current];
        yield current;
    }
};
const sequence = fibonacci(1,1);

console.log(sequence.next());
//<< 2

console.log(sequence.next());
//<< 3

console.log(sequence.next());
//<< 5

for (n of sequence) {
    // stop the sequence after it reaches 100
    if (n > 100) break;
    console.log(n);
}
/*
<< 8
<< 13
<< 21
<< 34
<< 55
<< 89
*/
//Functional Programming
function reverse(string) {
    return string.split('').reverse().join('');
}
const message = 'Hello JavaScript';
console.log(reverse(message));
//<< 'tpircSavaJ olleH'

console.log(message) // hasn't changed
//<< 'Hello JavaScript'
/*
let number = 42;
let result = 0;

function impureAdd(x) {
    result = number + x;
}

impureAdd(10);
console.log(result);
//<< 52
*/
/*
const number = 42;

function pureAdd(x,y) {
    return x + y;
}

result = pureAdd(number,10);
console.log(result);
//<< 52

function square(x){
    return x*x;
}
function hypotenuse(a,b) {
    return Math.sqrt(square(a) + square(b));
}

console.log(hypotenuse(3,4));
//<< 5

function sum(array, callback) {
    if(callback) {
        array = array.map(callback);
    }
    return array.reduce((a,b) => a + b );
}
console.log(sum([1,2,3])); // returns 1 + 2 + 3
//<< 6

console.log(sum([1,2,3], square)); // returns 1^2 + 2^2 + 3^2
//<< 14

function mean(array) {
    return sum(array)/array.length;
}

console.log(mean([1,2,3]));
//<< 2

function variance(array) {
    return sum(array,square)/array.length - square(mean(array))
}

   console.log(variance([1,2,3]));
    //<< 0.666666666666667

//Higher-Order Functions
function multiplier(x){
    return function(y){
        return x*y;
    }
}
doubler = multiplier(2);
console.log(doubler(10));
//<< 20
tripler = multiplier(3);

console.log(tripler(10));
//<< 30

function power(x) {
    return function(power) {
        return Math.pow(x,power);
    }
}
twoExp = power(2);
//<< function (power) {
//    return Math.pow(x,power);
//}

console.log(twoExp(5));
//<< 32

tenExp = power(10);
//<< function (power) {
//    return Math.pow(x,power);
//}

console.log(tenExp(6));
//<< 1000000
console.log(power(3)(5));
//<< 243

//Currying
*/
function multiplier(x,y) {
    return x * y;
}
const tax = multiplier(0.22,400);
console.log(tax)
//<< 88

function multiplier(x,y) {
    if (y === undefined) {
        return function(z) {
        return x * z;
        }
    } else {
        return x * y;
    }
}

calcTax = multiplier(0.22);
//<< function (z){
//    return x * z;
//}
console.log(calcTax(400));
//<< 88

//A General Curry Function

function curry(func,...oldArgs) {
    return function(...newArgs) {
        const allArgs = [...oldArgs,...newArgs];
        return func(...allArgs);
    }
}
const divider = (x,y) => x/y;

console.log(divider(10,5));
//<< 2
const reciprocal = curry(divider,1);
console.log(reciprocal(2));
//<< 0.5