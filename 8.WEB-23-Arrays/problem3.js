let data =[4,8,5,6,2,7,12,99,120,140,150];
let l_i=data.length-1;
 
for(let index=0;index<=l_i;index++){
  console.log(data[index]);
}

let arr2=[...data];    //spread
console.log(arr2);

data[4]=1100;
console.log(data);

let movies=["batman","RRR","pushpa","Avengers","ghajini"];

for(let i=0;i<=movies.length-1;i++){
  if(movies[i]=="pushpa"  || movies[i]=="ghajini"){
    continue;
 
}
  console.log(movies[i]);
}