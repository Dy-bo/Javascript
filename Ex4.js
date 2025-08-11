function showMessage (){  //no return and no parameter
     console.log("Me")
}

showMessage();

const obj = { //cell obj
     age:19,
     name: "DD"
}
console.table(obj)

function Mutiply(){ // return without parameter
     const r = 10*20;
     return r
}
console.log(Mutiply());

function Name(names){ // no return with parameter
     console.log(names);
}
Name("D")

function Add(num1, num2){ //return with parameter
     const cul=num1+num2;
     return cul;
}
console.log(Add(12,13));

var fn=function(){
     return 2+3
}

const arrow=()=>2+3 //arrow function
console.log("arrow function", arrow())