// const obj={name: 'sok' } // Default value(obj destructuring)
// const { name:n, age=28}= obj;
// console.log(n);
// console.log(age);

// const ob={name: 'sok', ag:28} // Renaming variables(obj destructuring)
// const { name:m, ag=a}= ob;
// console.log(m);
// console.log(a);

const obj={       //Nested object destructuring
    name:'Sok',
    address: {city:'Phnom Penh', zip: 1200}
}
const{name, address:{city,zip}}=obj;
console.log(name);
console.log(city);
console.log(zip);