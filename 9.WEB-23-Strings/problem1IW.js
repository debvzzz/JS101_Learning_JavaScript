let str="My name is Debamalya Gupta";
let count=0;
let str_1=" ";
for(var i=0;i<str.length;i++){
  if(str[i]==str_1){
    count++;
  }
  
}
if(count==0){
  console.log("Number of words is ",1);
}
else{
console.log("Number of words is ",count+1);
}
