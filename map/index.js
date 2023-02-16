const numbers = [5, 50, 80, 1, 2, 3, 4, 5, 11, 12, 6, 19, 25, 23, 18, 200, 100]

const numbersMap = numbers.map(number => {
  return (
    number * 2
  )
})

// console.log(numbersMap)


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const persons = [
  { name: 'Manoel', qi: 200 },
  { name: 'Karol', qi: 199 },
  { name: 'Kamili', qi: 3 },
  { name: 'Marquin', qi: 99 },
  { name: 'Moisés', qi: 101 },
  { name: 'Esh', qi: 180 },
]

const names = persons.map(person => {
  return (
    person.name
  )
})

const qi = persons.map(person => {
  return (
    { qi: person.qi }
  )
})

const addId = persons.map((person, i) => {
  const newPerson = {...person}
  newPerson.id = (i + 1) * 1000
  return newPerson
})

console.log(names)
console.log(qi)
console.log(addId)

