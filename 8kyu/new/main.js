// Об'єднати form1 та form2

let form1 = { name: 'John', surname: 'Doe' }
let form2 = { age: 23, profession: 'Programmer' }

function joinAll(...forms) {
  let obj = {};

  forms.forEach(i => {
    obj = { ...obj, ...i };
  })
  
  return obj
}

let result = joinAll(form1, form2)
console.log(result)
// console.log(Object.keys(result))
// console.log(Object.values(result))
// console.log(Object.entries(result))