// const user=[
//     {name:"Alice",age:21},
//     {name:"Bob",age:23},
//     {name:"Dog",age:21},
// ];
// const groupbyage=user.reduce((acc,num)=>{
//      if(!acc[num.age]){
//         acc[num.age]=[num.name];
//         return acc;
//      }else{
//      acc[num.age].push(num.name);
//      return acc;
//      }
// },{});
// console.log(groupbyage);


// const user=[
//{name:"Alice",age:21},
//{name:"Bob",age:23},
//{name:"Dog",age:21},
// ];

// console.log(user[0].age);

// let user=[
//     {name:"gaurav",age:21},
//     {name:"lokesh",age:21},
//     {name:"abhishek",age:29}
// ];
// let short=user.reduce((acc,num)=>{
//     if(!acc[num.age]){
//         acc[num.age]=[];
//     }
    
//         acc[num.age].push(num.name);
//     return acc;
// },{});
// console.log(short);


// let user=[
//     {productid:"a",rating:4},
//     {productid:"b",rating:4},
//     {productid:"a",rating:5},
//     // {productid:"a",rating:5},
//     // {productid:"a",rating:5},
//     // {productid:"b",rating:5},
// ];
// let a=[];
// let b=[];
// for(let i=0;i<user.length;i++){
//     if(user[i].productid==="a"){
//         a.push(user[i].rating);
//         } else if(user[i].productid==="b"){
//             b.push(user[i].rating);
//         }
// } 
// let c=a.reduce((acc,num)=>acc+num,0)/a.length;

// let d=b.reduce((acc,num)=>acc+num,0)/b.length;
// console.log("rating of a :",c);
// console.log("rating of b :",d);



















