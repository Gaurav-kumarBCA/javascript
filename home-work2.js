// Q1 find the length of the longest word in a sentence?
// function sentence(str){
// let ac=str.split(" ");
//  let ac2=ac.map(num=>num.length);
//         return Math.max(...ac2);
// }
// let res=sentence("hello i am gaurav kumar and how are you");
// console.log(res);

// Q2 write a function to convert celsius to fahrenhei?
// function convert(n){
//     let f=(9/5*n)+32;
//     return f;
// }
// let rse=convert(6);
// console.log(rse);

// Q3 write a function to convert fahrenhei to celsius?
// function convert(n){
//     let c=5/9*(n-32);
//     return c;
// }
// let rse=convert(600);
// console.log(rse);

// Q4 find the smallest number in an array?
// function smallest(arr){
// return arr.reduce((acc,num)=>{
//     if(acc>num){
//         return num;
//     }else{
//     return acc;
// }
// },arr[0]);
// }
// let res=smallest([23,45,32,65,78,76,3,56,78,65,0,65,3,9]);
// console.log(res);

// Q5 find the index of an element in an array?
// function index(arr){
//     let store=arr.indexOf(3);
//     return store;
// };
// let res=index([1,4,3,2,3,2,3,4,9]);
// console.log(res);

// Q6 swap the values of two variables?
// function swap(){
//     let a=30;
//     let b=34;
//     let temp=a;
//     a=b;
//     b=temp;
//    return ("a="+ a + "b="+ b);
// }
// console.log(swap());


// Q7 find the sum of all odd numbers in a array?
// function oddnumber(arr){
// let sum=arr.filter(num=>num%2);
// return sum.reduce((acc,num)=>acc+num,0);
// }
// let res=oddnumber([23,54,67,54,32,65]);
// console.log(res);


// Q8 remove all false value from an array (false,0,"",null,undefine,NAN)?
// function remove(arr){
// let a=arr.reduce((acc,num)=>{
//         if(Boolean(num)){
//             acc.push(num)
//         }
//         return acc;
// },[])
//     return a;
//         // OR
// return arr.filter(num => Boolean(num))
// }
// let res=remove([12, 34, false,0,"string", "", null,undefined,NaN]);
// console.log(res);

// Q9 check if an array contain a specific element?
// function specificelement(arr,element){
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==element){
//         return "yes";
//     }
// }
//     return "no";
// }
// let res=specificelement([10,20,30,40,50],20);
// console.log(res);


// Q10 write a function to check if a string start with a specific character ?
// function check(str,element){
//     if(str[0]==element){
//         return "yes";
//     }
//     else{
//         return "no";
//     }
// }
// let res=check("string","k");
// console.log(res);
