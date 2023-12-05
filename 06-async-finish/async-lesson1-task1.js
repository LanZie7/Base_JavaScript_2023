/*
Задание #1

Определите порядок вывода в следующем фрагменте кода без его запуска.

Определите для себя, почему вывод произошел именно в таком порядке.

*/

console.log('a');
new Promise((resolve, reject) => {
	console.log('b');
	setTimeout(() => {
		console.log('c');
		resolve();
	}, 0);
}).then(() => console.log('d'));

console.log('e');
setTimeout(() => console.log('f'), 0);
console.log('g');

// a, b, e, g, c, d, f

// Сначала выполняется console.log('a'),
// Затем создается новый Promise. При создании Promise, функция-аргумент сразу выполняется,
// Дальше выполняется console.log('e'),
// Затем выполняется console.log('g'),
// Далее, внутри Promise выполняется setTimeout с задержкой 0ms, поэтому код setTimeout(() => console.log('f'), 0); не выполняется немедленно, а ждет следующей итерации цикла событий.
// Console.log('c') выполняется после задержки в setTimeout,
// Затем выполняется resolve() внутри Promise, что вызывает срабатывание обработчика .then().
// В конечном итоге, console.log('d') выполняется внутри .then(),
// Console.log('f') выполняется после выполнения всех предыдущих операций.
