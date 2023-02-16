// ----- Forma extensa ----- //

const testArray = [1]

function callbackFilter(value, index, array) {
  // console.log(value)
  // console.log(index)
  // console.log(array)
}
const testArrayFilter = testArray.filter(callbackFilter)


// ----- Forma comum ----- //

// Filter não edita o array, somente filtra e retorna os valores filtrados.

const numbers = [5, 50, 80, 1, 2, 3, 4, 5, 11, 12, 6, 19, 25, 23, 18, 200, 100]

const numbersFilter = numbers.filter(number => {
  return number > 10
})

// console.log(numbersFilter)


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas que com mais de 100 de QI
// Retorne as pessoas cujo o nome termina com a

const persons = [
  { name: 'Manoel', qi: 200 },
  { name: 'Karol', qi: 199 },
  { name: 'Kamili', qi: 3 },
  { name: 'Marquin', qi: 99 },
  { name: 'Moisés', qi: 101 },
  { name: 'Esh', qi: 180 },
]

const personFilter = persons.filter(person => {
  return person.name.length >= 5 && person.qi > 100 && person.name.toLowerCase().endsWith('l')
})

console.log(personFilter)
