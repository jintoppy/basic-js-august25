const btn = document.querySelector('button');
btn.addEventListener('click', (evnt) => {
    console.log(evnt.target);
});

const myInput = document.querySelector('input');

myInput.addEventListener('keyup', (evnt) => {
    console.log(evnt.target.value);
    // console.log(myInput.value);
});

const resultContainer = document.querySelector('#result');

// resultContainer.innerHTML = '<p>hello</p><span>hi</span>';
const obj = {
    name: 'asdf',
    category: 'asdf'
}

resultContainer.innerHTML = `
    <p>Name: ${obj.name}</p>
    <span>category: ${obj.category}</span>
`;