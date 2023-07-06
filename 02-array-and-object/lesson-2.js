/*
Задание #1

Создайте переменную a, присвоив в нее любое число. 

Если значение переменной четное:
выведите в консоль “Четное”
Если значение переменной нечетное:
выведите в консоль “Нечетное”
Прибавьте к a + 1.
Выведите обновленное значение a.
*/


let a = 5

let b = a + 1

console.log(a % 2 == 0 ? 'Чётное' : 'Нечётное')
console.log(b % 2 == 0 ? 'Чётное' : 'Нечётное')


/*
Задание #2

Напишите программу, которая последовательно выводит числа в диапазоне [0, 1000], 
удовлетворяющие одному из условий:

Число нечетное
Число кратно 12

*/

function multipleNums() {
    numbers = []
    for (let i = 0; numbers.length < 1000; i++) {
        // if(i % 2 != 0) {
        //     numbers.push(i)
        // } else ''
        if (i % 12 == 0) {
            numbers.push(i)
        }
        else ''
    }

    return numbers

}


/*
Задание #3

Создайте массив со значениями [1, 10, 15, -100, -23, 19, 15032].
Получите из него новый массив, в котором каждый элемент будет увеличен на 25%.
Выведите оба массива в консоль.

*/

let oldArr = [1, 10, 15, -100, -23, 19, 15032]

let newArr = oldArr.map(num => num * 0.25 + num)

console.log(oldArr)
console.log(newArr)


/*
Задание #4

Создайте функцию, объявленную с помощью ключевого слова function, с именем sayHello(). 
Она принимает в параметры name и возвращает строку вида: "Hello, {name}!".

Если функция была вызвана без указания name, то выведите строку "Hello, someone!".

Закомментируйте функцию и напишите аналогичную, но в виде стрелочной функции.

*/

// function sayHello(name) {
//     if (name !== '') {
//         return `Hello ${name}!`
//     } else return 'Hello someone!'
// }

let sayHello = (name) => {
    if (name !== '') {
        return `Hello ${name}!`
    } else return 'Hello someone!'
}

/*
Задание #5

Напишите функцию calc(), которая принимает в параметры a и b, а также operation. 
В зависимости от переданной операции (+, -, /, *) возвращаем необходимый результат выражения с числами. 

function calc(a, b, operation) {
  // Ваш код здесь...
}

console.log(calc(1, 2, '+')); // 3
console.log(calc(1, 2, '-')); // -1
console.log(calc(2, 2, '*')); // 4
console.log(calc(4, 2, '/')); // 2

*/

var operators = {
    '+': function (a, b) { return a + b; },
    '-': function (a, b) { return a - b; },
    '*': function (a, b) { return a * b; },
    '/': function (a, b) { return a / b; }
},

calculate = function (val1, val2, sign) {
    if (sign in operators) {
        return operators[sign](val1, val2);
    }
}

console.log(calculate(6, 7, '*'));



/*
Задание #6

Создайте переменную age, присвоив ей числовое значение.
Создайте переменную category, присвоив ей с помощью тернарного оператора значение:
"Взрослый" — если age больше или равно 18
"Детский" — если age меньше 18
Выведите переменные в консоль.

*/

let age = 8
let category = age >= 18 ? 'Взрослый' : 'Детский'

console.log(age) // 8
console.log(category) // Детский




/*
Задание #7

Создайте переменные j и k с числовыми значениями.
Создайте переменную l, в которую с помощью тернарного оператора присвоите наибольшее значение (или j, или k).
Выведите значение l в консоль.

*/

let j = 9
let k = 3

let l = 'Max number is '

switch(Math.max(j, k)){
    case j: l += "j = " + j; break;
    case k: l += "k = " + k; break;
}
l += ".";

console.log(l) // Max number is j = 9.