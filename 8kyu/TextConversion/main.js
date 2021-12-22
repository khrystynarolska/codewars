function textConversion(str) {
  const letters = {
    a: '4', 
    e: '3', 
    i: '1', 
    o: '0'
  };

  const keys = Object.keys(letters); // вертає ['a', 'e', 'i', 'o']
  const arr = str.split(''); // масив строчок кожної букви ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't', ' ', 'i', 's', ' ', 'a', 'w', 'e', 's', 'o', 'm', 'e']

  for (let i = 0; i < arr.length; i++) {
    // i = 0 arr[i] = 'j'
    // i = 1 arr[i] = 'a'
    if (keys.includes(arr[i])) {
      // arr[i] = 'a'
      const key = arr[i]; // 'a'
      arr[i] = letters[key]; // arr[i] = '4';
    }
  }

  return arr.join('')
}

console.log(textConversion('javascript is awesome'))