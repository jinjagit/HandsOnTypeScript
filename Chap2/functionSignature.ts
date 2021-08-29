// 1. define the function type
type Run = (miles: number) => boolean;

// 2. declare the runner variable, and assign the function type to it
let runner: Run = function (miles: number): boolean {
  if(miles > 10){
    return true;
  }
  
  return false;
}

console.log(runner(11));

// => true
