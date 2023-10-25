const names = ['Максим', 'Владимир', 'Светлана']

// names.push('Ксения')
// names.unshift('Ксения')

// const name = names.shift()
// const name = names.pop()
// console.log('Names: ', names, name)

// console.log(names.reverse())
// const reversed = names.toReversed()
// const letters = ['c', 'd', 'a', 'g']
// console.log(letters.toSorted())
// console.log(letters)

// console.log(names.splice(0, 2))
// console.log(names.toSpliced(0, 2))
// console.log(names)

// const bestFriend = 'Anna'
// const index = names.indexOf(bestFriend)
// console.log(index)
// const newNames = names.with(index, 'Anna Shipaeva')
// names[index] = 'Anna Shipaeva'
// console.log(names[index])
// console.log(names)
// console.log(newNames)

// const capitalNames = names.map(function (name, index) {
//   if (index === 1) {
//     return 'Anna Shipaeva'
//   }
//   return name
// })
// console.log(capitalNames)

// console.log(names.includes('Elena'))
// console.log(names.indexOf('Elena!') !== -1)

const people = [
  { name: 'Максим', budget: 17200 },
  { name: 'Владимир', budget: 15800 },
  { name: 'Светлана', budget: 28500 },
]

// console.log(people.indexOf({ name: 'Ксения', budget: 7520 })) // так не сработает 

// let foundPerson

// for (let person of people) {
//   if (person.budget === 7520) {
//     foundPerson = person
//   }
// }

// const finded = people.find((p) => p.budget === 7520)

// const finded = people.find(function (person) {
//   return person.budget === 7520
// })

// const finded = people.findIndex(function (person) {
//   return person.budget === 7520
// })

// console.log(people.with(finded, 42))

// let sumBudget = 0
// const filtered = people.filter(function (p) {
//   return p.budget > 5000
// })
// filtered.forEach(function (p) {
//   sumBudget += p.budget
// })

// const byBudget = (p) => p.budget > 5000
// const pickBudget = (p) => p.budget

// const sumBudget = people
//   .filter(byBudget)
//   .map(pickBudget)
//   .reduce((acc, p) => acc + p, 0)

// console.log(sumBudget)

const string = 'Привет, как дела?'
const reversed = string
  .split('')
  .toReversed()
  .join('!')
  .split('')
  .filter((c) => c !== '!')
  .join('')

console.log(reversed) // '?алед как ,тевирП'
