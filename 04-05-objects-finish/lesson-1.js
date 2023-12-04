/*
Задание #1

Создайте класс Circle, который имеет поле radius, а также метод getArea(), 
высчитывающий площадь круга и округляющий её до двух знаков после запятой. 

Сделайте так, чтобы код ниже работал:

const circle = new Circle(5);
console.log(circle.getArea()); // "78.54"
*/

class Circle {
	constructor(radius) {
		this.radius = radius
	}

	getArea() {
		const area = 3.14 * Math.pow(this.radius, 2)
		return area.toFixed(2)
	}
}

const circle1 = new Circle(5)
const circle2 = new Circle(6)
console.log(circle1.getArea()) // "78.50"
console.log(circle2.getArea()) // "113.04"


/*
Задание #2

Реализуйте класс Product, который имеет поля name и price. 
Также он имеет метод priceWithDiscount(), 
который возвращает обновленную цену с учетом переданной скидки (в процентах). 
Метод не изменяет само значение price в объекте, а только выводит обновленное.  

Сделайте так, чтобы код ниже работал:

const product = new Product("Phone", 1000);
console.log(product.priceWithDiscount(10)); // 900
console.log(product.priceWithDiscount(20)); // 800

*/

class Product {
	constructor(name, price) {
		this.name = name
		this.price = price
	}

	priceWithDiscount(discount) {
		return this.price - (this.price * (discount / 100))
	}
}

const product = new Product("Phone", 1000);
const product1 = new Product('phone', 25000)
const product2 = new Product('laptop', 80000)

console.log(product.priceWithDiscount(10)); // 900
console.log(product.priceWithDiscount(20)); // 800

console.log(product1.priceWithDiscount(10)); // 22500
console.log(product2.priceWithDiscount(15)); // 68000

console.log(product1.price) // 25000, метод не изменяет само значение price в объекте, а только выводит обновленное.

/*
Задание #3

Реализуйте класс Person, который имеет поле friends (изначально пустой массив). 

Также он имеет методы:
addFriend() — принимает имя нового друга и добавляет его в массив friends;
showFriends() — выводит в консоль строку со всеми друзьями через запятую.
Сделайте так, чтобы код ниже работал:

const person = new Person();
person.addFriend("Иван");
person.addFriend("Сергей");
person.addFriend("Игорь");
person.showFriends(); // Иван, Сергей, Игорь

*/

class Person {
	constructor() {
		this.friends = []
	}

	addFriend(newFriend) {
		this.friends.push(newFriend)
	}

	showFriends() {
		console.log(this.friends.join(', '))
	}
}
const person = new Person()
person.addFriend("Иван");
person.addFriend("Сергей");
person.addFriend("Игорь");
person.showFriends(); // Иван, Сергей, Игорь


/*
Задание #4

1. Создайте класс Animal с полями name, favoriteFood, а также методами:

makeSound() — вывести звук животного в консоль;
sayName() — вывести имя животного в консоль;
sayInfo() — вывести любимое блюдо животного в консоль.
2. Создайте еще 2 класса, которые будут наследоваться от класса Animal — Cat, Dog. 
Переопределите для них метод makeSound(), чтобы он всегда возвращал соответствующий звук животного. 

3. Сделайте так, чтобы код ниже работал:

const dog = new Dog('Rex', 'Meat');
const cat = new Cat('Barsik', 'Fish');

cat.makeSound(); // Meow
dog.makeSound(); // Woof

dog.sayName(); // My name is Rex
cat.sayName(); // My name is Barsik

dog.sayInfo(); // Rex's favorite food is Meat
cat.sayInfo(); // Barsik's favorite food is Fish

*/

class Animal {
	constructor(name, favoriteFood) {
		this.name = name
		this.favoriteFood = favoriteFood
	}

	makeSound(animalSound) {
		console.log(animalSound)
	}

	sayName() {
		console.log("My animal's name is " + this.name)
	}

	sayInfo() {
		console.log(`${this.name}'s favorite food is ` + this.favoriteFood)
	}
}

class Cat extends Animal {
	makeSound() {
		console.log('Meow')
	}
}

class Dog extends Animal {
	makeSound() {
		console.log('Woof')
	}
}

const dog = new Dog('Rex', 'Meat');
const cat = new Cat('Barsik', 'Fish');

cat.makeSound(); // Meow
dog.makeSound(); // Woof

dog.sayName(); // My name is Rex
cat.sayName(); // My name is Barsik

dog.sayInfo(); // Rex's favorite food is Meat
cat.sayInfo(); // Barsik's favorite food is Fish


/*
Задание #5

Создайте объект foo со свойством a равным 5. Также добавьте ему два метода:

bar() — с помощью ключевого слова function;
baz() — с помощью стрелочной функции.
Внутри методов выведите в консоль this.a и затем выполните следующий код:

foo.bar();
foo.baz();
Проанализируйте результаты вызовов и определите для себя, почему произошел тот или иной вывод. 

*/

const foo = {
	a: 5,
	bar: function () {
		console.log(this.a)
	},
	baz: () => console.log(this.a)
}

foo.bar(); 	// 5, применено слово function, this ссылается на сам объект
foo.baz(); 	// undefined, 
			/* стрелочные ф-ции не создают новый контекст выполнения,
			и ключевое слово this внутри стрелочной функции ссылается на контекст, 
			в котором она была определена, то есть на глобальный объект (window в браузере или global в Node.js). 
			В данном случае, метод baz был определен в глобальном контексте выполнения (не внутри объекта foo), 
			поэтому this.a ссылается на undefined. */

/*
Задание #6

Дан следующий фрагмент кода:

const boxFactory = {
	type: 'box',
	count: 0,
	produce: () => {
		this.count++;
		return 'Box №' + this.count;
	}
}

const produceBox = (produceFn) => {
	const boxName = produceFn();
	console.log(boxName);
}

for(let i = 0; i < 25; i++) {
	produceBox(boxFactory.produce);
}
Отредактируйте код так, чтобы при его работе выводились корректные номера коробок. 
Функцию produceBox() править нельзя. 

*/

const boxFactory = {
	type: 'box',
	count: 0,
	produce: function () { // заменяем стрелочную функцию на обычную функцию
		this.count++;
		return 'Box № ' + this.count;
	}
}

const produceBox = (produceFn) => {
	const boxName = produceFn();
	console.log(boxName);
}

for(let i = 0; i < 25; i++) {
	produceBox(boxFactory.produce.bind(boxFactory));
}