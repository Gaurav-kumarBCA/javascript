// Q1 find the large number of array?
// function largenumber(arr){
// return arr.reduce((acc,num)=>{
//     if(num>acc){
//         return num;
//     }
//     else{
//         return acc;
//     }
// },0);
// }
// let res=largenumber([23,43,23,54,65,43,46]);
// console.log(res);


// Q2 Count the string letter?
// function count(str){
//    return str.length;
// }
// let res=count("hello");
// console.log(res);


// Q3 Reverse a given string?
// function reverse(str){
// let str1="";
// for(let i=str.length-1;i>=0;i--){
//      str1=str1+str[i];
// }
//     return str1;
// }
// let res=reverse("hello");
// console.log(res);


// Q4 Remove a duplicates value in a givev array?
// function duplicate(arr){
//    return arr.reduce((acc,num)=>{
//         if (!acc.includes(num)){
//             acc.push(num);
//         }
//         return acc;
//     },[]);
// }
// let res=duplicate([1,2,3,1,2,4,5,6,7,4,3,2]);
// console.log(res);


// Q5 find the factorial of number?
// function factorial(N){
//     let facto=1;
// for (i=1;i<=N;i++){
//     facto=facto*i;
// }
// return facto;
// }
// let res=factorial(3);
// console.log(res);


// Q6 find the even and odd number?
// function even(arr){
//    return arr.reduce((acc,num)=>{
//         if(num%2==0){
//             // acc.push(num);
//             return acc+num;
//         }
//             return acc;     
//     },0);
// }
// let res=even([1,3,2,4,5,33,52,66,44,20]);
// console.log(res);


// Q7 convert the first letter to upper case?
// function uppercase(str){
//     let revo=str.charAt(0).toUpperCase() + str.slice(-4);
//     return revo;
// }
// let res=uppercase("hello");
// console.log(res);
//          OR
// function uppercase(str){
//     if(str.length>=0){
//         return str.charAt(0).toUpperCase() + str.slice(-4);
//     }
//     else{
//         return str;
//     }
// }
// let res=uppercase("hello");
// console.log(res);


// Q8 Arrange the asscending order?
// function asscending(arr){
//    return arr.sort((a,b)=>{
//     console.log(a,b);
//         return a-b;
//     });
// }
// let res=asscending([23,43,55,11,33,88,54]);
// console.log(res);


// Q9 Count the vowels in a given string?
// function vowel(str){
//     let count=0;
//     let vowels="aeiouAEIOU";
// for(let i=0;i<str.length;i++){
//     if(vowels.includes(str[i])){
//         count=count+1;
//     }
// }
//     return count;
// } 
// let res=vowel("hello");
// console.log(res);


// Q10 Merge the two object?
// function Merge(){
// let obj1={
//     name: "gaurav",
//     age: 21,
//     subject: "BCA",
// };

// let obj2={
//     sem:"third",
//    "roll-No":21,
//    gender:"male",
// };
// return {...obj1,...obj2};
// }
// let obj3=Merge();
// console.log(obj3);


// Q11 specific property check in a given obj?
// function specific(){
// let obj={
//     name:"Gaurav",
//     age:21,
//     collage:"SSGI",
//     class:"BCA"
// };
// if(!obj.hasOwnProperty("lastname","semester","Gender")){
//     obj.lastname="kumar";
//     obj.semester="third";
//     obj.Gender="Male";
// }
//     return obj;
// }
// let obj1=specific();
// console.log(obj1);


// Q12 Conver the object into an array of key-value pairs?
// function keyvalues(){
//     let obj={
//         name:"Gaurav",
//         age:21,
//        collage:"SSGI",
//        class:"BCA",
//        sem:"third",
//        "roll-No":21,
//        gender:"male"
//     };
//     return  Object.entries(obj);
// };
// let obj1=keyvalues();
// console.log(obj1);


// Q13 Check if all element in an array are positive?
// function  check(arr){
//         return arr.filter(num=>num>=0);
// }
// let res=check([1,2,-3,-4,5,-6,-8]);
// console.log(res);



// Q14  second large number in a array?
// function secondlarge(arr){
//  let large = arr.sort((a,b)=>b-a);
//  return large.slice(1,2);
// }
// let res=secondlarge([22,34,56,78,32,45,67,89,90])
// console.log(res);


//  Q15 find the palindrome number?
//   function palin(str){
//     let rev="";
//     for(let i=str.length-1;i>=0;i--){
//       rev=rev+str[i];
//     }      
//     if(str==rev){
//       return "true";
//     }
//     else{
//       return "false";
//     }
    
// };
// let res=palin("121");
// console.log(res);                                          


//Q16 write a function to count the occurrences of a letter in a string?
// function letter(str){
//     let count=0;
// return str.reduce((acc,num)=>{
//     if(!acc.includes(num)){
//         acc.push(num)
//     }
// },[])
// }
// let res=letter("hello");
// console.log(res);


function finds(arr){
return arr.reduce((acc,num,i)=>{
    if(num%3==0 || num%7==0){
        acc.push(i);
        return acc;
    }
    return acc;
},[])
}
let res=finds([10,30,33,49,84,100,105]);
console.log(res);
