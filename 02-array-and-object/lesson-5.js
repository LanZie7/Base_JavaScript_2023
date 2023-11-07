/*
Задание #1

Напишите функцию sumNumbers(), которая принимает 
произвольное количество чисел через запятую и возвращает их сумму.

const result1 = sumNumbers(1, 2, 3, 4, 5);
console.log(result1); // 15

const result2 = sumNumbers(10, 20, 30);
console.log(result2); // 60
*/

function sumNumbers(...nums) {
    return nums.reduce((sum, current) => sum + current, 0)
}

const result1 = sumNumbers(1, 2, 3, 4, 5)
console.log(result1) // 15

const result2 = sumNumbers(10, 20, 30)
console.log(result2) // 60


/*
Задание #2

Напишите функцию findMaxValue(), которая принимает массив чисел 
и находит максимальное значение. 
Если массив пустой, то возвращается значение undefined.

const numbers1 = [1, 2, 3, 4, 5];
const max1 = findMaxValue(numbers1);
console.log(max1); // 5

const numbers2 = [10, 20, 5, 30, 15];
const max2 = findMaxValue(numbers2);
console.log(max2); // 30

const emptyArray = [];
const maxEmpty = findMaxValue(emptyArray);
console.log(maxEmpty); // undefined

*/

function findMaxValue(maxNumArr) {
    if (maxNumArr.length === 0) {
        return undefined
    } else {
        return Math.max(...maxNumArr)
    }
}

const numbers1 = [1, 2, 3, 4, 5]
const max1 = findMaxValue(numbers1)
console.log(max1) // 5

const numbers2 = [10, 20, 5, 30, 15]
const max2 = findMaxValue(numbers2)
console.log(max2) // 30

const emptyArray = []
const maxEmpty = findMaxValue(emptyArray)
console.log(maxEmpty) // undefined


/*
Задание #3

Напишите функцию calculateAverage(), которая принимает массив чисел 
и вычисляет их среднее арифметическое. 
Если массив пустой, то возвращается 0.

const nums1 = [1, 2, 3, 4, 5];
console.log(calculateAverage(nums1)); // 3

const nums2 = [10, 20, 30, 40, 50];
console.log(calculateAverage(nums2)); // 30

const emptyArr = [];
console.log(calculateAverage(emptyArr)); // 0

*/

function calculateAverage(numsArr) {
    if (numsArr.length === 0) {
        return 0
    } else {
        const sum = numsArr.reduce((acc, number) => acc + number, 0)
        const arrLength = numsArr.length
        return sum / arrLength
    }
}

const nums1 = [1, 2, 3, 4, 5]
console.log(calculateAverage(nums1)) // 3

const nums2 = [10, 20, 30, 40, 50]
console.log(calculateAverage(nums2)) // 30

const emptyArr = []
console.log(calculateAverage(emptyArr)) // 0


/*
Задание #4

Напишите функцию isPalindrome(), которая принимает строку и возвращает true, 
если она является палиндромом, иначе — false. 

Примечание. Палиндром — строка, которая читается одинаково слева направо и справа налево. 

console.log(isPalindrome('level')); // true
console.log(isPalindrome('radar')); // true
console.log(isPalindrome('hello')); // false

*/

function isPalindrome(string) {
    // Сначала нужно удалить все буквы и цифры, и привести всё к нижнему регистру
    string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

    // Сравниваем строку с перевернутой версией самой себя
    if (string === string.split("").reverse().join("")) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome('level')) // true
console.log(isPalindrome('radar')) // true
console.log(isPalindrome('hello')) // false


/*
Задание #5

Напишите функцию removeDuplicates(), которая принимает массив и возвращает новый массив без дубликатов. 

const numbers01 = [1, 2, 3, 3, 4, 5, 5];
console.log(removeDuplicates(numbers01));  // [1, 2, 3, 4, 5]

const numbers02 = [10, 20, 30, 30, 40, 40, 50];
console.log(removeDuplicates(numbers02));  // [10, 20, 30, 40, 50]

const emptyArray1 = [];
console.log(removeDuplicates(emptyArray1));  // []

*/

function removeDuplicates(arr) {
    if (arr.length === 0) {
        return []
    } else {
        const newSet = new Set(arr)
        const uniqueNums = Array.from(newSet)
        return uniqueNums
    }

}

const numbers01 = [1, 2, 3, 3, 4, 5, 5]
console.log(removeDuplicates(numbers01))  // [1, 2, 3, 4, 5]

const numbers02 = [10, 20, 30, 30, 40, 40, 50]
console.log(removeDuplicates(numbers02))  // [10, 20, 30, 40, 50]

const emptyArray1 = []
console.log(removeDuplicates(emptyArray1))  // []


/*
Задание #6

Создайте функцию createCounter(), которая принимает начальное значение и возвращает три функции:

inc() — увеличивает значение на 1;
dec() — уменьшает значение на 1;
get() — возвращает текущее значение.
Пример использования функции:

function createCounter(value) {
	// Ваш код здесь...
}

const { inc, dec, get } = createCounter(5);
console.log(get()); // 5
inc();
inc();
inc();
dec();
console.log(get()); // 7

*/



function createCounter(value) {
    // Создаем объект с методами inc(), dec() и get()
    return {
        // Сначала изменяем значение переменной, а затем возвращаем его
        inc: () => ++value,
        dec: () => --value,
        get: () => value
    }

}

const { inc, dec, get } = createCounter(5);

console.log(get()) // 5
inc()
inc()
inc()
dec()
console.log(get()) // 7