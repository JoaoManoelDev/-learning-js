// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numbers = [5, 50, 80, 1, 2, 3, 4, 5, 11, 12, 6, 19, 25, 23, 18, 200, 100]

const total = numbers.reduce((acc, value, i, array) => {
  return acc + value
}, 0)

const array = numbers.reduce((acc, value) => {
  if (value % 2 === 0) acc.push(value)
  return acc
}, [])

const doubleNumbers = numbers.reduce((acc, value) => {
  acc.push(value * 2)
  return acc
}, [])

// console.log(total)
// console.log(array)
// console.log(doubleNumbers)


// Retorne a pessoa com o maior qi

const persons = [
  { name: 'Manoel', qi: 200 },
  { name: 'Karol', qi: 199 },
  { name: 'Kamili', qi: 3 },
  { name: 'Marquin', qi: 99 },
  { name: 'Moisés', qi: 101 },
  { name: 'Esh', qi: 180 },
]

const bestQi = persons.reduce((acc, value) => {
  if (acc.qi > value.qi) return acc
  return value
})

console.log(bestQi)
