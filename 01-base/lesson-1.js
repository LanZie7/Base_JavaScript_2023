/*
Задание #1

Необходимо создать 3 переменных: var a, let b, const c и присвоить им значения 5 , 10, 13 соответственно.
Выведите все три переменные с помощью console.log().
После вывода присвойте переменным a, b и с новые значения, затем выведите их в консоль и посмотрите, что получилось. 
В случае возникновения ошибок удалить “проблемное” выражение.
*/

var a = 5
let b = 10
const c = 13

console.log('first log', a) // 5
console.log('first log', b) // 10
console.log('first log', c) // 13

a = 23
b = 34
c = 7

console.log('second log', a) // 23
console.log('second log', b) // 34
console.log('second log', c) // error -> нельзя перезаписывать константу


/*
Задание #2

Последовательно запустите следующие фрагменты кода и посмотрите, что получилось.
Определите для себя, почему в этих 3-х случаях произошел тот или иной результат выполнения.
*/

const a = 100;
a = 20;
console.log(a); // Константу нельзя перезаписывать.


let a = 15;
console.log(a); // 15


var a;
a = 10;
console.log(a); // 10


/*
Задание #3

Необходимо написать программу, в которой нужно определить переменные (указать для них свои значения):

productName — название товара.
productPrice — стоимость.
productQuantity — количество купленного товара.
resultCost — итоговая стоимость (высчитать динамически, с учетом цены и количества товара).
Выведите в консоль строку, в которой на месте фигурных скобок будут соответствующие значения переменных:

“Вы купили {productName} ({productQuantity} шт.) по {productPrice} ₽. Всего было потрачено: {resultCost} ₽”
*/

let productName = 'Xiaomi Gaming Laptop'
let productPrice = 150000
let productQuantity = 2
let resultCost = productPrice * productQuantity

console.log(`Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} ₽. Всего было потрачено: ${resultCost} ₽`)


/*
Задание #4

Выведите в консоль следующие выражения:

typeof 'Hello'
typeof 10
typeof {}
typeof null
typeof undefined
typeof true
typeof []
typeof (() => {})
Проанализируйте результат выполнения программы и определите для себя, почему произошел тот или иной вывод. 
*/

console.log(typeof 'Hello') // string
console.log(typeof 10) // number
console.log(typeof {}) // object
console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof true) // boolean
console.log(typeof []) // object
console.log(typeof (() => {})) // function


/*
Задание #5

Выведите в консоль следующие выражения:

10 == 10
10 != 10
12 == 'Привет'
10 < 11
12 > 20
true && true
true && false
false && true
false || true
true || false
true || true
10 <= 10
18 <= 20
50 >= 50
51 >= 50
{} === {}
{} == {}
*/

console.log(10 == 10) // true
console.log(10 != 10) // false
console.log(12 == 'Привет') // false
console.log(10 < 11) // true
console.log(12 > 20) // false
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false || true) // true
console.log(true || false) // true
console.log(true || true) // true
console.log(10 <= 10) // true
console.log(18 <= 20) // true
console.log(50 >= 50) // true
console.log(51 >= 50) // true
console.log({} === {}) // false
console.log({} == {}) // false


// Сравнение по ссылке:

const j = {};
const k = j; // копирование по ссылке
console.log(j === k); // true -> здесь j и k ссылаются на один и тот же объект, поэтому они равны



/*
Задание #6

Создайте 2 переменные, присвойте им любые числа. Если одна больше другой, выведите в консоль true, иначе — false. 

Примечание. Нельзя использовать if...else и тернарный оператор. 

*/

let l = 18
let p = 4


switch (boolean) {
    case p !== l:
        console.log(true)
        break;
  
    default:
        console.log(false)
}


