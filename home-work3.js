//Q1 Reverse each words in a sentence?
// function rev(str){
//   let str1=str.split(" ");
//   return str1.map((num)=>{
//     let str3=num.split("").reverse().join("");
//     return str3;
//   }).join(" ");
// }
console.log(rev("hello how are you"));
function rev(str){
    return str.split(" ").map(s => s.split("").reverse().join("")).join(" ")
  }
