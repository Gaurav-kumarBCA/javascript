// function large(arr){
// let arr1=arr.flat(Infinity);
// // return arr1;
// return arr1.reduce((acc,num)=>{
//         if(acc<num){
//             return num;
//         }
//         return acc;
// },0);
// }
// let res=large([1,2,3,4,5,[3,4,[4,6,3]]]);
// console.log(res);

// function values(obj1){
// let obj3=Object.values(obj1);
// return obj3.reduce((acc,num)=> acc+num ,0);
// }
// let res1=values({a:10,b:20,c:40});
// console.log(res1);

// let obj={
//     a:10,
//     b:20,
//     c:20,
//     d:30
// };
// let obj1=Object.values(obj);
// console.log(obj1.reduce((acc,num)=>acc+num,0));


// function duplicate(arr){
// return arr.filter((num)=>num%2==0);
// }
// let res=duplicate([2,4,3,56,87,45,9]);
// console.log(res);



// function smallest(arr){
//     return arr.reduce((acc,num)=>{
//         if(acc>num){
//             return num;
//         }else{
//         return acc;
//     }
//     },arr[0]);
//     }
//     let res=smallest([23,45,32,65,78,76,3,56,78,65,0,65,3,9]);
//     console.log(res);

    


// let a=function(a){
// return a.map((num)=>num*2);
// }
// let res=a([12,34,45,56,43]);
// console.log(res);




function palindrom(str){
let revers="";
for(let i=str.length -1 ;i>=0;i--){
    revers=revers+str[i];
}
if(revers==str){
    return "palindrom";
}
else{
    return "not palindrom";
}
};
let res=palindrom("madam");
console.log(res);