//Q1 convert a nested array into a flat array?
// function nested(arr){
// return arr.flat(Infinity);
// } 
// let res=nested([1,[2,[3]],4]);
// console.log(res);

//Q2 find the maximum value in a array of number?
// function max(arr){
// return arr.reduce((acc,num)=>{
//     if(acc<num){
//         return num;
//     }
//     else{
//         return acc;
//     }
// },[]);
// }
// let res=max([10,67,86,90,45]);
// console.log(res);


//Q3 remove the duplicate value in a array of number?
// function duplicate(arr){
// return arr.reduce((acc,num)=>{
//     if(!acc.includes(num)){
//         acc.push(num);
//     }
//     return acc;
// },[]);
// }
// let res=duplicate([1,3,3,2,5,5,6,4,4]);
// console.log(res);

//Q4 create an object representing a book and display its details?
// const book={
//     title:"The Habbit",
//     Author:"J.R.R.Tolkien,",
//     year: "published in 1937"
// };
// console.log(Object.values(book).join(" "));

//Q5 Merge two object into a new object?
// let a={
//     firstname:"Gaurav",
//     lastname:"kumar",
// };
// let b={
//     age:20,
//     gender:"male"
// };
// let c={
//     ...a,...b
// };
// console.log(c);

//Q6 create a new object where key and values are swapped?
// let swap={
//     a:1,
//     b:2
// };
// let reve={};
// for(let key in swap){
//     reve[swap[key]]=key;
// }
// console.log(reve);

//Q7 calculate the sum of all numeric values in a object?
// let fruits={
//     apple:5,
//     oranges:3,
//     banana:2,
// };
// let res= Object.values(fruits);
// console.log(res.reduce((acc,num)=>acc+num,0));

//Q8 write a function to check if a key exists in a object?
// function check(obj){
//     if(obj.hasOwnProperty("age")){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let res=check({name:"gaurav",age:20});
// console.log(res);


//Q9 return the logest words from of array of string?
// function longest(arr){
//     let rec=arr[0];
//     for(i=1;i<arr.length;i++){
//         if(arr[i].length>rec.length){
//             rec=arr[i];
//         }
//     }
//     return rec;
// }
// let res=longest(["apple","banana","mango"]);
// console.log(res);

//Q10 