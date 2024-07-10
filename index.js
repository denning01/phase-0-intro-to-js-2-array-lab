// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name) {
    cats.push(name);
}

// Example usage:
destructivelyAppendCat("Ralph");
console.log(cats);

function destructivelyPrependCat(name) {
    cats.unshift(name);
}



// Usage
destructivelyPrependCat('Felix');
console.log(cats);


function destructivelyRemoveLastCat() {
    cats.pop();
}

// Usage
destructivelyRemoveLastCat();
console.log(cats);

function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Usage
destructivelyRemoveFirstCat();
console.log(cats);

function appendCat(name){
    return [...cats, name]
}


function prependCat(name){
    return[name, ...cats];
}


function removeFirstCat(){
    return cats.slice(1);
}

function  removeLastCat(){
    return cats.slice(0,2);
    
}

