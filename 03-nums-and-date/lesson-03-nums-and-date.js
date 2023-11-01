/*
Задание #1

Реализуйте функцию isPrimeNumber(), которая принимает число и возвращает true, если оно простое, иначе — false.

Примечание. Простые числа — это числа, которые больше 1 и не имеют делителей, кроме 1 и самого себя.
*/

function isPrimeNumber(number) {
    if(number <= 1) {
        return false
    }

    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            return false
        }
    }
    return true
}

isPrimeNumber(4) // false
isPrimeNumber(5) // true
isPrimeNumber(6) // false
isPrimeNumber(7) // true


/*
Задание #2

Напишите функцию func(), которая принимает num, min, max:

Если число num < min, то функция возвращает min ** 2.
Если число num > max, функция возвращает max ** 2.
Если число num < max - (max - min) / 2, то функция возвращает num ** 2
Иначе возвращает округленное вниз значение num.

*/

function func(num, min, max) {
    if(num < min) return man ** 2
    else if(num > max) return max ** 2
    else if(num < max - (max - min) / 2) return num ** 2
    else return Math.floor(num)
}

func(3, 1, 10) // 9
func(8.5, 1, 10) // 8


/*
Задание #3

Создайте функцию isPerfectNumber(), которая принимает целое положительное число в параметры и возвращает true, 
если число является совершенным, и false в противном случае.

Примечание. Совершенное число — это число, равное сумме всех своих положительных делителей (за исключением самого числа). 
Например, число 6 является совершенным, потому что делители числа 6 (1, 2, 3) в сумме дают 6.
*/

function isPerfectNumber(number) {
    let sum = 0;
    for(let i = 1; i <= number / 2; i++) {
        if(number % i === 0) {
            sum += i;
        }
    }

    if(sum === number && sum !== 0) {
        return true;
    } else {
        return false;
    }  
}

isPerfectNumber(45) // false
isPerfectNumber(28) // true


/*
Задание #4

Напишите функцию getNumberDigit(), которая принимает число (number) и индекс цифры в числе (digitPosition). Возвращает она цифру числа number, находящуюся на позиции digitPosition. 

Если происходит попытка чтения числа на позиции, которой не существует (например, кол-во цифр в числе меньше, чем передано в digitPosition), то верните undefined.

Примечание. Нельзя использовать приведение числа к строке.

*/


function getNumberDigit(number, digitPosition) {
    let num = Math.abs(number);
    
    let count = 0;
    while (num > 0) {
      if (count === digitPosition) {
        return num % 10;
      }
      
      num = Math.floor(num / 10);
      count++;
    }
    
    return undefined;
}



