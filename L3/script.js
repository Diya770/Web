// var arr=[   2,3,4,56,7];
// const doubleArrVal = arr.map((x)=>x*2)
// console.log(doubleArrVal)


//----------------------------------------------------------------------------------------------

// var arr=[2,3,4,5,6]
// Array.prototype.mapreplica=function (logic){
//     var output=[];
//     for(var i=0;i<this.length;i++){ 
//         output[i]=logic(this[i]);
//     }
//     return output;
// }

// function logic(x){
//     return x*2;
// }

// console.log(arr.mapreplica(logic));



//-----------------------------------------------------------------------

// var arr=[2,3,4,5,6]
// Array.prototype.filterreplica=function(logic){
//     var output=[];
//     for(let i=0;i<this.length;i++){
//         if(logic(this[i])){
//             output.push((this[i]));
//         }
//     }
//     return output;
// }

// function evenlogic(x){
//     return x%2==0;
// }

// function oddlogic(x){
//     return x%2!=0;
// }

// function greaterthan(x){
//     return x>6;
// }
// console.log(arr.filterreplica(evenlogic));
// console.log(arr.filterreplica(oddlogic));
// console.log(arr.filterreplica(greaterthan));




//this reduce function used to find the product of all elements in an array
// It takes an array and returns the product of all its elements.
// var array=[2,3,4,5,6]

// const mulofAll= array.reduce(function(acc,curr){
//     acc=acc*curr;
//     return acc;
// },1);
// console.log(mulofAll);


//now i want to find the reduce prototype function in simple way

Array.prototype.reducereplica = function(logic, initialValue) {
    
    
    return accumulator;
};

// Example usage
var array = [2, 3, 4, 5, 6];
const mulofAll = array.reducereplica(function(acc, curr) {
    return acc * curr;
}, 1);
console.log(mulofAll); // Output: 720

