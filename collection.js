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



// }
// let res=letter("hello");
// console.log(res);

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


// reverse the sentence program?

// function sentence(str){
// let str1=str.split(" ")
// // return str1;
// return str1.map((num)=>num.split("").reverse().join("")).join(" ");

// }
// let res=sentence("hello bhai and how are you");
// console.log(res);



// function sentence(str){
// let str1=str.split(" ")
// // return str1;
// return str1.map((num)=>num.split("").reverse().join("")).join(" ");

// }
// let res=sentence("hello bhai and how are you");
// console.log(res);

// function reversestr(str){
//     let str1 = str.split(" ");
//     return str1.map((num)=>{
//       return  num.split("").reverse().join("");
        
//     }).join(" ");
//     console.log(str1);
// }
// let res = reversestr("hello bhai and how are you");
// console.log(res);

// function reversestr(str){
//     let str1 = str.split(" ");
//     return str1.map((num)=>{
//       return  num.split("").reverse().join("");
        
//     }).join(" ");
//     console.log(str1);
// }
// let res = reversestr("hello bhai and how are you");
// console.log(res);



// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
//   }
  
//   sayHi();







