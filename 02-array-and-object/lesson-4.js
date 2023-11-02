/*
Задание #1

Дан объект машины. 

const car = {
    name: 'Hendai Solaris',
	type: 'sedan',
	maxSpeed: '320',
	color: 'red',
}
Необходимо написать написать функцию, 
которая принимает объект машины и возвращает строку с HTML, 
заполненную значениями переданного объекта.

<article>
    <div>
        <h2>Hendai Solaris</h2>
        <span>sedan</span>
    </div>
    <div>
        <span>Maximum speed:</span>
        <span>320</span>
    </div>
    <div>
        <span>Color:</span>
        <span>red</span>
    </div>
</article>

*/

const car = {
    name: 'Hendai Solaris',
    type: 'sedan',
    maxSpeed: '320',
    color: 'red',
}

function renderCarInfo() {
    return `
        <article>
            <div>
                <h2>${car.name}</h2>
                <span>${car.type}</span>
            </div>
            <div>
                <span>Maximum speed:</span>
                <span>${car.maxSpeed}</span>
            </div>
            <div>
                <span>Color:</span>
                <span>${car.color}</span>
            </div>
        </article>
    `
}

renderCarInfo()


/*
Задание #2

Необходимо написать функцию countWords(), 
которая принимает предложение и подсчитывает количество слов в нем.

const sentence = "Hello, how are you?";
console.log(countWords(sentence)); // 4
*/


function countWords(sentence) {
    // Используем метод split() для разделения предложения на отдельные слова
    // и сохраняем их в массиве
    const words = sentence.split(" ")
    // Возвращаем длину массива, которая будет представлять 
    // количество слов в предложении
    return words.length
}

const sentence = "Hello, how are you?"
const wordCount = countWords(sentence)
console.log(countWords(sentence)) // 4


/*
Задание #3

Необходимо написать функцию getInitials(), 
которая принимает полное имя в виде строки (например, “John Doe”) 
и возвращает инициалы в формате “J. D.”.

const fullName = "John Doe";
const initials = getInitials(fullName);
console.log(initials); // "J. D."
*/

function getInitials(fullName) {
    // Разбиваем имя на отдельные слова
    const nameSplit = fullName.split(" ")
    // Создаем массив для хранения инициалов
    const preInitials = []
    // Проходимся по каждому слову имени
    nameSplit.forEach(part => {
        // Берем первую букву каждого слова и добавляем в массив инициалов
        preInitials.push(part[0].toUpperCase() + ".")
    });
    // Объединяем инициалы в строку, разделяя их пробелами
    const finalInitials = preInitials.join(" ")
    // Возвращаем инициалы
    return finalInitials
}

const fullName = "John Doe";
const initials = getInitials(fullName)
console.log(initials) // "J. D."


/*
Задание #4

Необходимо написать функцию generateGoogleString(), 
которая принимает число и возвращает сроку ”Google” 
с указанным количеством букв “o”. 
При этом минимальное количество букв “о” равно 2.

console.log(generateGoogleString(4));
// Goooogle

console.log(generateGoogleString(0));
// Google

console.log(generateGoogleString(-2));
// Google

*/

function generateGoogleString(num) {
    // Проверяем, что число не меньше 2 или отрицательным
    if (num < 2) {
        return "Google"
    }

    // Создаем строку "Google" с указанным количеством букв "o"
    let result = "G"
    // Добавляем нужное количество букв "о" в строку
    for (let i = 0; i < num; i++) {
        result += "o"
    }
    // Добавляем "gle" в конец строки
    result += "gle"

    return result
}

console.log(generateGoogleString(4)) // Goooogle
console.log(generateGoogleString(0)); // Google
console.log(generateGoogleString(-2)); // Google


/*
Задание #5
Реализуйте функцию countVowels(), которая подсчитывает 
количество гласных букв (латинских и кириллических) в переданной строке.

const str = "Hello, Привет!";
console.log(countVowels(str)); // 4
*/

function countVowels(str) {
    // Создаем массив с гласными буквами (латинскими и кириллическими)
    const vowels = [
        "a", "e", "i", "o", "u", "y", 
        "а", "е", "ё", "и", "о", "у", 
        "ы", "э", "ю", "я"
    ];

    // Приводим строку к нижнему регистру
    str = str.toLowerCase();

    // Инициализируем счетчик гласных
    let count = 0;

    // Перебираем каждую букву в строке
    for (let i = 0; i < str.length; i++) {
        // Проверяем, является ли текущая буква гласной
        if (vowels.includes(str[i])) {
        // Если да, увеличиваем счетчик на 1
        count++;
        }
    }

    // Возвращаем количество гласных
    return count;
}

const str = "Hello, Привет!";
console.log(countVowels(str)); // 4