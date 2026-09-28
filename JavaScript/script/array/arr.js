//Array in js
// there are 2 way that we can declare array
// 1.constuctor
let array1=new Array(1,2,3,4,5);
console.table([array1]);

//2.liternal notation array
let array2=["Hi",1,2,3,"Good",5];
console.table([array2]);

// find the lenght of array
console.log(`The lenght of Arary2: ${array2.length}`)

// add loop
for(let i=0;i<array2.length;i++){
    console.log(`Array 2[${i}]:${array2[i]}`)
}


let fruit = ["apple", "banana", "coconut", "orange", "grape"];
console.table([fruit])

fruit.unshift("kiwi", "strawberry")   // add item from the first index
console.table([fruit]);

fruit.push("blueberry")   // add item from the last index
console.table([fruit]);

fruit.pop();   // delete item from the last index
console.table([fruit]);

fruit.splice(2, 1, "dragon fruit");  // splice (indexStart, deleteCount, replaceItem)
console.table([fruit]);

fruit.shift();
console.table([fruit]);    // delete item from the first index

let animal=["dog", "cat", "cow", "butterfly", "fly"];
let mixedAnimalWithFruit = fruit.concat(animal);      // combine 2 arr into 1 arr
console.table([mixedAnimalWithFruit]);








