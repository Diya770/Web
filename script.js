// console.log("Hello World");
// console.log(a);
// var a =123;
// console.log(a);
// function abc(){
//     console.log("THIS IS A FUNCTION ABC");
//     function hgf(){
//         console.log("THIS IS A FUNCTION HGF");
//     }
//     hgf();
// }
// abc();
// var b=300;
// console.log(b);



//HOF

// function walkinside(cb) {
//     console.log("Walking inside the house");
//     setTimeout(cb, 1000);
// }
// function foodorer(cb) {
//     console.log("Food ordered");
//     setTimeout(cb, 2000);
// }
// function payBill(cb) {
//     console.log("paying the bill");
//     setTimeout(cb, 3000);
// }
// function walkAway() {
//     console.log("walking away from the restaurant");
//     // No callback needed here
//     setTimeout(() => {
//         console.log("Done!");
//     }, 4000);
// }

// // Chain the callbacks
// walkinside(() => {
//     foodorer(() => {
//         payBill(() => {
//             walkAway();
//         });
//     });
// });



////array operation

// let arr=[2,3,4,56,7]
// function doubleArrVal(arr){
//     let arr1=[];
//     for(let i=0;i<arr.length;i++){
//         arr1[i]=arr[i]*2;

//     }
//     return arr1;
// }
// console.log(doubleArrVal(arr));

// let arr=[2,3,4,56,7];
// Array.prototype.doubleArrVal=function(){
//     let output=[]
//     for(var i=0;i<this.length;i++){
//         output[i]=this[i]*2;
//     }
//     return output;
// }


// console.log(arr.doubleArrVal());

//CURRYING IN JS


function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(add(2)(3)(4)); // Output: 9



//cal ,apply,bind



const student1={
    name:"john",
    age:20
}


const student2={
    name:"john",
    age:20
}
function welcomeStudets(greeting, farewell) {
    console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old.`);
    console.log(`${farewell}, see you soon!`);
}
welcomeStudets.call(student1, "Welcome", "Goodbye");
welcomeStudets.apply(student2,["Hello", "See you later"]);
const fun=welcomeStudets.bind(student1, "Hi", "Take care");  // Using bind to create a new function
//console.log(fun());

fun(); // Calling the bound function


//EVENT CAPTURING AND BUBBLING
