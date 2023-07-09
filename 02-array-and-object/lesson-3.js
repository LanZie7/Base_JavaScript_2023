/*
Задание #1

Создайте 2 объекта john и ann с полями name, age, pet и заполните их именем, 
возрастом и именем питомца соответственно.

Создайте функцию, которая в параметры принимает объект человека (john или ann), 
и в качестве результата выводит информацию о нем в консоль:

“Меня зовут {name}, мне {age}, у меня есть питомец {pet}”

Создайте функцию incrementAge(), которая в параметры принимает объект человека 
и увеличивает ему возраст на 1.

Выведите циклом все названия свойств и их значения, которые есть у объекта john.
*/


let john = {
	name: 'John',
	age: 35,
	pet: 'cat'
}

let ann = {
	name: 'Ann',
	age: 27,
	pet: 'dog'
}

function userInfo() {
	console.log(`My name is ${john.name}, I'm ${john.age} years old, I've got a ${john.pet}`)
	console.log(`My name is ${ann['name']}, I'm ${ann['age']} years old, I've got a ${ann['pet']}`)
}
userInfo()

function incrementAge() {
	let annAgeIncrement = ann.age += 1
	let johnAgeIncrement = john.age +=1
	console.log(annAgeIncrement)
	console.log(johnAgeIncrement)
}
incrementAge()


/*
Задание #2

Создайте функцию, которая на вход принимает массив, а на выходе возвращает сумму его элементов:

*/

const arr = [1, 50, 20, 75, 90]

function sum(array) {
	return array.reduce((acc, number) => acc + number)
}
 
sum(arr) // 236


/*
Задание #3

Создайте пустой массив namesArr.
Добавьте в него 5 любых имен.
Выведите массив в консоль.
Уберите из начала и конца массива по 1 элементу.
Снова выведите массив в консоль.

*/

let namesArr = ['Kenzie', 'Maxim', 'Liara', 'Sheron']
console.log(namesArr)
let deleteFirstName = namesArr.shift()
let deleteLastName = namesArr.pop()
console.log(deleteFirstName)
console.log(deleteLastName)

console.log(namesArr)



/*
Задание #4

Дан массив names. Необходимо сделать функцию, которая на основе этого массива генерирует строку c HTML. 
Она представляет из себя список элементов (<ul>), где каждый элемент списка (<li>) содержит элемент массива.

const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];

*/


const list = document.getElementById('list')

const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya']

function render() {
	for (let i = 0; i < names.length; i++) {
		list.insertAdjacentHTML('beforeend', getNames(names[i], i))
	}
}
	
render()

function getNames(name, idx) {
	return `
		<ul class="list-group list-group-flush" id="list">
			<li data-index="${idx}" class="list-group-item d-flex justify-content-between align-items-center">
				${name}
			</li>
		</ul>
	`
}



/*
Задание #5

Дан объект:

const obj = {
	age: 22,
	favColor: 'red',
	height: 188,
	pet: 'dog',
	money: 12300
};
Необходимо выполнить деструктуризацию объекта (для всех полей). 
Выведите полученные переменные в консоль. 

*/

const obj = {
	age: 22,
	favColor: 'red',
	height: 188,
	pet: 'dog',
	money: 12300
}

const { age, favColor, height, pet, money } = obj

console.log(age)
console.log(favColor)
console.log(height)
console.log(pet)
console.log(money)



/*
Задание #6

Даны объекты:

const obj1 = {
	age: 22,
	favColor: 'red',
	height: 188,
	pet: 'dog',
	money: 12300
};

const updateObj1 = {
	age: 23,
	favColor: 'blue',
	money: 11450
};

const obj2 = {...};
console.log(obj2);

 * {
 *	age: 23,
 *	favColor: 'blue',
 *	height: 188,
 *	pet: 'dog',
 *	money: 11450
 *}

Необходимо создать новый объект obj2, в котором будут все поля объекта obj1, 
но с обновленными значениями полей как у объекта updateObj1. 

*/

const obj1 = {
	age: 22,
	favColor: 'red',
	height: 188,
	pet: 'dog',
	money: 12300
}

const updateObj1 = {
	age: 23,
	favColor: 'blue',
	money: 11450
}

const obj2 = {}

// копируем все свойства obj1 в obj2
for (let k in obj1) {
	obj2[k] = obj1[k]
}

Object.assign(obj2, updateObj1)

console.log('obj1', obj1)
console.log('updateObj', updateObj1)
console.log('obj2', obj2)