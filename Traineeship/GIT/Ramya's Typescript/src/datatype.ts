//datatypes can be String
let Name_d = "Ramya"; // within quotes is string

//can be number bboth decimal and whole

let age_d = 36;

//can be boolean

let issweet = true;
let isangry = false;

//can be any or unknown
let x: any = "text"
x=100;

console.log(x);

let y = "hello";

// can be Array - model a list of items

let marks= [90,80,70];
let names= ["Ramya ", "Pranu", "Mithun" ];

console.log(names);
console.log(marks);

//tuple - fixed length array with different types

let person = ["Ramya" , 36];
console.log(person);

//enum - used for constant or fixed values in the below eg - color is fixed.

let color{
    Red,
    Green,
    Blue,
    Yellow
}
let c = color.Yellow;
console.log(color);

//object

//Union Types

//void

//Null and undefined

