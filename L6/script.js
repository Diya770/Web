
//PROMISE IS AN OBJECT: HOW TO MAKE IT


// const promise1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     // console.log("THIS IS PROMISE OBJECT");
//   reject("PRomise REJECTED");
//   },3000)
// })

// console.log(promise1);

// promise1
// .then((res)=> console.log(res))
// .catch((err)=> console.log("ERROR: ",err))





// const promise1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     // console.log("THIS IS PROMISE OBJECT");
//   resolve("PRomise RESOLVED P1");
//   },3000)
// })
// promise1
// .then((res)=>console.log(res))
// .then(()=> setTimeout(()=>{
//   console.log("P2")
// },2000))
// .then(()=> setTimeout(()=>{
//   console.log("P3")
// },5000))
// .then(()=> setTimeout(()=>{
//   console.log("P4")
// },1000))
// .catch((err)=> console.log(err));


const promise1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    // console.log("THIS IS PROMISE OBJECT");
  resolve("PRomise RESOLVED P1");
  },3000)
})

function somethingSomething(message,delay){
  return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("PRomise RESOLVED: ", message);
  resolve("PRomise RESOLVED: ", message);
  },delay)
})
}

function somethingSomethingRej(message,delay){
  return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("PRomise REJECT: ", message);
  reject("PRomise REJECT: ", message);
  },delay)
})
}

promise1.then((res)=> console.log(res))
.then(()=>{
  return somethingSomething("P2", 4000);
})
.catch((err)=> console.log("ERROR",err))
.then(()=>{
  return somethingSomethingRej("P3",3000)
})
.catch((err)=> console.log("ERROR",err))
.then(()=>{
  return somethingSomething("P4",1000)
})
.catch((err)=> console.log("ERROR",err));