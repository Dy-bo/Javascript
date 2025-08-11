function greetUser(name){ //lab1: no return but accepts parameter
  console.log(name);
}
greetUser("Alice");

function sayHello(){  // lab2: return without parameter
    let greeting  = "Hello, World!"
    return greeting
}
console.log(sayHello());

function Add(num1,num2){ //lab3: reeturn with parameter
    const cul =num1+num2;
    return cul;
}
console.log(Add(5,10));


var firstName ="Ra"; //lab4: Es6
var lastName = "Dy";
    let fullName = firstName +" " + lastName;
    let fullNameEs6 = `{firstName}${lastName}`
console.log(fullName)

function Mutiply(a,b){  //lab5: Arrow function
    return 2*3
}
const mutiplyArrow = (a,b) => 2*3;
console.log(mutiplyArrow());

const greet=(name="Guest")=>{ //lab6:Arrow function-default parameter
   console.log(`Hello, ${name}`);
}
greet();
greet("Charlie");