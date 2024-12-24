let num = 209999999990;

if(num%10==0) {
    console.log("Good");
} else {
    console.log("Bad");
}

// console.log("\n Example of alert and prompt");
// let name = prompt("Enter the name of user :");
// let age = prompt("Enter the age of user :");
// alert(`${name} is ${age} years old`);

console.log("\n Example of 2 numbers have the same last digit");
let a = 32;
let b = 118732;
let remA = a%10;
let remB = b%10;
if(remA == remB) {
    console.log("Two numbers having same last digit i.e. " +remA)
}else {
    console.log("Two numbers does not have same last digit")
}


