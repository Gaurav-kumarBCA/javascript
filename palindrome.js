function palin(str){
      let rev="";
      for(let i=str.length-1;i>=0;i--){
        rev=rev+str[i];
      }      
      if(str==rev){
        return "true";
      }
      else{
        return "false";
      }
};
let res=palin("gaurav");
console.log(res);
