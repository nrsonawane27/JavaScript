let arr = [7, 5, 8, 4, 3, 8];
console.log(arr.slice(0,4));
console.log(arr.slice(-4));
console.log();

let arr1 = [1, 2, 3, 1, 5, 6, 3, 7, 2, 1];
let n = console.log("Enter the number to delete");
for(let i=0; i<arr1.length; i++) {
    if(arr1[i] == n){
        arr1.splice(i, 1);
    }
}
console.log(arr1);

let m = console.log("Enter the number:");
let count = 0;
for(let i=0; i<m; i++) {
    count++;
}
console.log(count);

let num = console.log("Enter the number:");
console.log(num);
let sum = 0;
let copy = num;
while(copy >0 ) {
    let digit = copy%10;
    sum+=digit;
    copy= Math.floor(copy/10);
}
console.log(sum);

let largest =0;
for(let i = 0; i<arr.length; i++) {
    if(arr[i]>largest) {
        largest = arr[i];
    }
}
let number = console.log("Largest number is : "+largest);

console.log("Enter the number:");
let fact = 1;
for(let i=1; i<=number; i++) {
    fact*=i;
}
console.log("factorial is : "+fact);