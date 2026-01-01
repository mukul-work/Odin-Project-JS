// String Declaration

const greeting1 = "Hello";
const greeting2 = 'Greetings';
//const wrongString = mk; invalid declaration
const newString = greeting1;
console.log(greeting1);
//console.log(wrongString);
console.log(newString);
console.log(greeting2);




// Embedding JavaScript

const userName = "Mukul";
console.log(`Hello, ${userName}`);

const num1 = 10;
const num2 = 5;
console.log(`The difference is: ${num1-num2}`);




// Multiline Strings

// wrong method

/* 
const introduction = "Hello, my name is Mukul Kashyap.
I'm a JS developer.";
 */

// correct method

const introduction = `Hello, my name is Mukul Kashyap.
I'm a JS developer.`;
console.log(introduction);




// Concatenation
console.log(greeting1 + ", " + userName);




// string methods

console.log(userName.length); // sttring length

// conversion to lower and upper cases
console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
console.log(userName); // no change to the original string


// extracting characters
console.log(userName.charAt(2)); // for positive indices
console.log(userName.charCodeAt(2)); // for UTF-16 codes
console.log(userName.codePointAt(2)); // for Unicode and emojis
console.log(userName.at(-1)); // for positive and negative indices and for emojis
console.log(userName[2]);

// extracting string parts
const text = "Apple, Banana, Kiwi";
console.log(text.slice(3, 12));

// concatenation
console.log(greeting2.concat(" ",userName));

