const users = [
  {
    name: 'Fiona',
    sex: 'F',
    age: 22
  },
  {
    name: 'Julia',
    sex: 'F',
    age: 37
  },
  {
    name: 'John',
    sex: 'M',
    age: 26
  },
  {
    name: 'Mark',
    sex: 'M',
    age: 31
  },
];

const result = users
  .filter(user => user.age > 30 && user.sex === 'M')
  .map(user => user.name);