// start pattern

// Square Pattern

let x = 5;
let sqr = "";

for(let i = 0; i < x; i++){
  for(let j = 0; j < x; j++){
    sqr += '*';
  }
  sqr += "\n";
}

console.log(sqr);


// Left triangle Pattern
let n = 5;
let ltr = "";

for(let i = 0; i <=n; i++){
  for(let j = 0; j < i; j++){
    ltr += '*';
  }
  ltr += "\n";
}

console.log(ltr);