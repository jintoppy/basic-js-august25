function getValue(obj, prop, value){
    const originalValue = obj[prop];
    if(originalValue === value){
      return true;
    }else {
      return false;
    }

}


const student = {
    name: 'abc',
    age: 10
}

const teacher = {
  className: '10th',
  school: 'llch'
}

const resA = getValue(teacher, 'school', 'llch');
console.log(resA); //true



const res = getValue(student, 'name', 'def')

console.log(res); //false

const res1 = getValue(student, 'name', 'abc')

console.log(res1); //true

const res2 = getValue(student, 'age', 10)

console.log(res2); //true