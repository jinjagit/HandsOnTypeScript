// in this function, we are throwing an error if the person is over a certain age,
// indicating that this is an unexpected age value.
// So, since encapsulation is a high-level principle for writing good-quality code,
//it is beneficial to indicate explicitly that a failure of the function to return
// could occur without needing the developer to know about the internals of how the
// function works.
// never provides that communication.

function oldEnough(age: number): never | boolean {
  if(age > 59) {
    throw Error("Too old!");
  }
  if(age <=18){
    return false;
  }
  return true;
}

console.log(oldEnough(60));

// =>
// Error: Too old!
//     at oldEnough (/Users/simon/Repos/HandsOnTypeScript/Chap2/never.js:3:15)
//     at Object.<anonymous> (/Users/simon/Repos/HandsOnTypeScript/Chap2/never.js:10:13)
