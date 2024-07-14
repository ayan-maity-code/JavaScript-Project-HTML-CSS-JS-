//Activity 1- Arithmetic Operations
let a= 12,b=13;
console.log(a+b);
console.log(b-a);
console.log(a*b);
console.log(a/b);
console.log(b%a);

//Activity 2- Assignment Operators
let c = 2;
c+=11;
console.log(c);
c-=1;
console.log(c);

//Activity 3- comparison Operators
let d = 3;
console.log(c > d);
console.log(c < d);
console.log(c <= d);
console.log(c >= d);
console.log(c === d);// it checks type of variable
console.log(c == d);

//Activity 4- Logical Operators
let f = 3,g=3;
if(f>=g && f>=1){
    console.log("f is greater than g and f is equal or greater than 1");
}

if(f>=g || f<=1){
    console.log("f is greater than g and f is equal or less than 1");
}

let h = false;
if(h!= true){
    console.log("h is false");
}

// Activity 5 - Ternary operator
let i = -1;
(i<0)?console.log("i is negative"):console.log("i is positive");

