function ageAndAccompanied (age, accompanied) {
  const agePG = 13;

  if ((age < agePG && accompanied === true) || age >= agePG) {
    return 'You can go'
  } else {
    return 'Sorry, look for an adult'
  }
}

ageAndAccompanied(12, true)