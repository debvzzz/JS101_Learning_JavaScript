let year_birth=1998;
let age=2022-year_birth;

if(age>=13 && age<=19){
  console.log("Teenage");
}
else if(age>=21 && age<=29){
  console.log("Twenties");
}

age>=13 && age<=19 ? console.log("Teenage")
  :age>=21 && age<=29 ? console.log("Twenties")
  :console.log("Not in age gap");

