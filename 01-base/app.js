/* БАЗА ВСЕЙ БАЗЫ JAVASCRIPT :) */

let num = 42
let firstName = 'Lana'
let lastName = 'Bochkova'
const isJuniorProgrammer = true

firstName = 'Svetlana'

/* CAN DO:
let $ = 'test' // допустимый символ
let $num = 42
let num$ = 35
let first_name= 'Elena' // разрешено, но плохая практика, поэтому лучше исп-ть camelCase (let firstName= 'Elena')
let num1 = 10
*/


/*
alert(firstName)
console.log('firstName', firstName)
*/


/*
ОПЕРАТОРЫ
console.log(num + 10)
console.log(num - 10)
console.log(num * 10)
console.log(num / 10)
console.log(num)
*/

// const fullName = firstName + lastName



/*
    Код для калькулятора
*/

const resultElement = document.getElementById('result')
console.log(resultElement.textContent)
const input1 =document.getElementById('input1')
const input2 =document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

// console.log(input1.value)
// console.log(input2.value)

const sum = +input1.value + +input2.value
resultElement.textContent = sum

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumsWithAction(input1, input2, actionSymbol) {
    const num1 = Number(input1.value)
    const num2 = Number(input2.value)
    return actionSymbol == '+' ? num1 + num2 : num1 - num2 // через тернарный оператор
}

submitBtn.onclick = function () {
    const result = computeNumsWithAction(input1, input2, action)
    printResult(result)
    // if (action == '+') {
    //     const sum = +input1.value + +input2.value
    //     printResult(sum)
    // } else {
    //     const sum = +input1.value - +input2.value
    //     printResult(sum)
    // }

}
