//synchronous 
//asynchronous
// API call 
//brower request <=>response server
const a = 10 + 10;
const b = a + 10;
console.log(b);

console.log('before timeout');
setTimeout(() => {
    console.log('inside timeout');
}, 0);
console.log('after timeout');


fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(result => {
        console.log(result);
    });


//async...await

const getUsers = async () => {
    const res = await fetch('https://api.github.com/users');
    const result = await res.json();
    console.log(result);
}

getUsers();












