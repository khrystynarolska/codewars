/*
The solution would work like the following:
getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

const getEvenNumbers = (numbersArray) => numbersArray.filter(x => x % 2 === 0)

console.log(getEvenNumbers([1,2,3,6,8,10]))