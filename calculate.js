const arr = [3, 6, 1, 9, 10];
const arr1 = [{name: 'asdf'}, {name: 'da'}]
let sum = 0;
for(let item of arr1){
    console.log(item.name);
}

const myObj = {
    mark1: 10,
    mark2: 20,
    marrk3: 30
};

let objSum = 0;
for(let myProp in myObj){
    // console.log(myProp);
    // console.log(myObj[myProp]);
    objSum += myObj[myProp];
}

console.log(objSum);
