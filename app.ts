// TS Compiler P
// Type Annotations
// Type Inference
// Type Aliases
// Union Types
// Interfaces
// Type Aliases vs Interface
// Generics
// Enums
// Tuples
// Type Guards





//-----Type Annotations-----//



// const user:string = 'arsalan'
// // user = 20       //Not Allowed

// console.log(user);





// let age =20;
// age =21;
// console.log(age);




// interface obj {
//     username :string;
//     age:number;
//     email:string
// };

// let Obj:obj={
//     username:'ajm',
//     age :20,
//     email:'abc@gmail.com'
// }
// console.log(Object.entries(Obj).map(([key,val])=>{document.write(`<h1>${key}:${val}</h1>`);
// }));


// -----    Type Aliases vs Interface  ------- //

// type User = {
//     usernmae :string
//     age  :number
// }

// type User = {
//     lastnmae:string  //wrong syntax
// }




// interface User  {
//     username :string;
//     age  :number;
// }



// interface User {
//   username: string;
//   age: number;
// }

// interface User {
//   lastname: string;
// }

// const  userInput:User = {
// username : 'Muhammad',
// age:20,
// lastname : 'Arsalan'
// }
// console.log(userInput);


// interface Fruits {
//     Fruitname:string;
// price:number;
// type:string;
// }

// const fruit:Fruits={
//     Fruitname:'Mango',
//     price:250,
//     type:'Chaunsa',
//     stata:'Sindh'

// }
// console.log(fruit);

// interface Fruits{
// stata:string
// }

// interface Mango extends Fruits {
//     stata:string
// } 

// const mango:Mango = {
//     Fruitname:'Mango',
//     price:250,
//     type:'Chaunsa',
//     stata:'Sindh'
// }
// console.log(mango);









