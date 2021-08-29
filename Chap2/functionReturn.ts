function eat(calories: number) {
  console.log("I ate " + calories + " calories");
}

function sleepIn(hours: number): string {
  return "I slept " + hours + " hours";
}

let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(slept);

// =>
// I ate 100 calories
// undefined // undefined because the function doesn't return anything
// I slept 10 hours // uses return value, therefore 'slept' is defined