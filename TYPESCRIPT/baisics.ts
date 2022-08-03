//Primitives:number,string,boolean
//Complex:arrays,objects
//Functions parameters


//Primitives

let age: number = 24;
age = 12
let userName: string | string[];
userName = 'max'
let isInstructor: boolean;
isInstructor = true

//complex

let hobbies: string[];
hobbies = ['reading', 'drawing']
// let person:any;
type Person = {
    name: string;
    age: number;
};

let person: Person
person = {
    name: 'max',
    age: 32
}

// person={
//     isEmployee=true
// }
let people: Person[];

//Type Inference;

let course: string | number = 'react'
course = 1234


//Function and types

function add(a: number, b: number): number {
    return a + b;
}
function print_output(value: any) {
    console.log(value)
}

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, 5)
