let sum=0;
let count=0
let arr=[1,2,3,5,15,26,42,55,20,50];
for(let i=0;i<=arr.length-1;i++){
  if(arr[i]%2==0){
    sum+=arr[i];
    count++;
  }
 
}
 console.log(sum/count);