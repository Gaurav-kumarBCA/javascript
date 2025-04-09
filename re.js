// Q1 sum of two number?

// function add(a,b){
// let sum=a+b;
// return sum;
// }
// let ret=add(4,5);
// console.log(ret);

//Q2 1 to 10 numder print?

// for(let i=1;i<=10;i++){
//     console.log(i*8);
// }

//Q3 reverse string?

// function res(str){
// let rec="";
// for(let i=str.length-1;i>=0;i--){
//     rec=rec+str[i];
// }
// return rec;
// }
// let c=res("Hello");
// console.log(c)

// OR

// let str="hello";
// let str1=str.split("").reverse().join("");
// console.log(str1);

//Q4 Object handling?

let obj={
    name:"Rohit",
    age:21,
    city:"Moradabad",
};
console.log(Object.entries(obj).reverse());