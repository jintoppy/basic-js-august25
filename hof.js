//Higher Order Function

function sayHello(){
    return function(){
        console.log('hello');
    }
}

const myFn = sayHello();

const arr1 = [3, 5, 1, 3];

for(let item of arr1){
    console.log(item);
}

function printItem(item){
    console.log(item);
}

arr1.forEach((item) => {
    console.log(item);
});