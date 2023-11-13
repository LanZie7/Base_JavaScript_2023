/*
Задание #1

Напишите функцию calculateAge(), которая принимает день рождения и возвращает количество лет.

const birthDate = new Date('1990-05-20');
const age = calculateAge(birthDate);

console.log(age);
*/

function calculateAge(birthDate) {
    const today = new Date()
    const difference = today - birthDate
    const ageDate = new Date(difference)

    return ageDate.getUTCFullYear() - 1970

}

const birthDate = new Date('1990-05-20');
const age = calculateAge(birthDate);

console.log(age); // 33


/*
Задание #2

Напишите функцию getDateDifference(), которая возвращает разницу в днях между двумя датами.

const date1 = new Date('2027-06-01');
const date2 = new Date('2027-06-10');
const difference = getDateDifference(date1, date2);
console.log(difference); // 9

*/

function getDateDifference(x, y) {
    const date1 = new Date(x)
    const date2 = new Date(y)

    // Получаем разницу в миллисекундах
    const diffBetweenDates = Math.abs(date1 - date2)

    // Конвертируем разницу в дни
    const days = diffBetweenDates / (1000 * 60 * 60 * 24)
    return days
}

const date1 = new Date('2027-06-01')
const date2 = new Date('2027-06-10')
const difference = getDateDifference(date1, date2)
console.log(difference) // 9


/*
Задание #3

Напишите функцию getTimeUntilDate(date), которая возвращает объект с информацией о том, сколько времени осталось от текущей даты до переданной. 

const targetDate = new Date('2027-12-31T23:59:59');
const timeUntilTargetDate = getTimeUntilDate(targetDate);
console.log(timeUntilTargetDate);
// { days: 100, hours: 20, minutes: 45, seconds: 31 }

*/

function getTimeUntilDate(date) {
    const currentDate = new Date()
    const timeDifference = date - currentDate
    console.log(timeDifference)

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds }
}

const targetDate = new Date('2027-12-31T23:59:59');
const timeUntilTargetDate = getTimeUntilDate(targetDate);
console.log(timeUntilTargetDate);


/*
Задание #4

Напишите функцию isWeekend(), которая проверяет, является ли указанная дата выходным днем. 

const date01 = new Date('2027-07-10');  // Суббота
const date02 = new Date('2027-07-12');  // Понедельник

console.log(isWeekend(date01));  // true
console.log(isWeekend(date02));  // false

*/

function isWeekend(date) {
    // Получаем номер дня недели (0 - воскресенье, 1 - понедельник, и т.д.)
    const day = date.getDay()

    // Проверяем, является ли день выходным (суббота или воскресенье)
    if (day === 0 || day === 6) {
        return true
    } else {
        return false
    }

}

const date01 = new Date('2027-07-10');  // Суббота
const date02 = new Date('2027-07-12');  // Понедельник

console.log(isWeekend(date01));  // true
console.log(isWeekend(date02));  // false


/*
Задание #5

Напишите функцию, которая проверяет, является ли год високосным. Возвращает true, если да, иначе — false. 

console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2024)); // true

*/

function isLeapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0))
}

console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2024)); // true


/*
Задание #6

Напишите функцию, которая возвращает последнее число месяца.

// июнь 2027
console.log(getLastDayOfMonth(2027, 5)); // 30

// февраль 2027
console.log(getLastDayOfMonth(2027, 1)); // 28

// январь 2027
console.log(getLastDayOfMonth(2027, 0)); // 31

*/

function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate()
}

// июнь 2027
console.log(getLastDayOfMonth(2027, 5)); // 30

// февраль 2027
console.log(getLastDayOfMonth(2027, 1)); // 28

// январь 2027
console.log(getLastDayOfMonth(2027, 0)); // 31