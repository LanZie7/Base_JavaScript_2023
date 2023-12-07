/*
Задание #3

Напишите функцию sumWithDelay(), которая принимает delay, a, b 
и возвращает a + b через delay миллисекунд. 
Функция должна работать на основе Promise API.

*/

function sumWithDelay(delay, a, b) {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			const sum = a + b
			resolve(sum)
		}, delay)
	})

	return promise
}
  
async function start() {
	try {
		const result = await sumWithDelay(1000, 5, 5);
		console.log(result);
	} catch (error) {
		console.log('Error: ', error)
	}
	
}
  
start();