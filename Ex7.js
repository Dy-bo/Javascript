const swap=[10, 20, 30] //Lab 1: Swap Three Values
const[a,b,c]=swap;
console.log(b);
console.log(c);
console.log(a);

const person={  // Lab 2: Exract Nested Object
    name:{firstName:'Ry', lastName:'Dy'},
    address:{city:'Phnom Penh', country:'Cambodia'}
}
const{name:{firstName,lastName}, address:{city,country}}=person;
console.log(firstName);
console.log(lastName);
console.log(city);

function getBookInfo(book){//Lab 3: Object Destructuring with Renaming
    const{title: bookTitle, publishedYear:Year}=book;
    return `Book: ${bookTitle}(${Year})`
}

const book={  //Lab 4:
    title:'GRAVE OF THE FIREFLES',
    publishedYear:'1998',
}
console.log(getBookInfo(book));

const createUser=({name, age, role="guest"})=>{
    return `User:&{name}, Age:&{age}, Role:&{role}`;
}
console.log(createUser({name:"dy",age:18, role:"Student"}));