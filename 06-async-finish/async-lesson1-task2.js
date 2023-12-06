/*
Задание #2

Напишите код, который получает список задач по URL https://jsonplaceholder.typicode.com/todos 
и выводит их в виде списка (<ul>) на страницу. 

Примечание. Сетевые запросы можно выполнять с помощью функции fetch(), 
работающей на основе Promise API. 

*/

const url = 'https://jsonplaceholder.typicode.com/todos'

// Функция для выполнения запроса и обработки данных
async function getToDoList() {
	try {
		let response = await fetch(url)
		let tasks = await response.json()
		showToDoList(tasks)
		
	} catch (error) {
		console.log('Error: ', error)
	}
}

// Функция для отображения задач на странице
function showToDoList(tasks) {
	const ul = document.createElement('ul')

	tasks.forEach(task => {
		const li = document.createElement('li')
		li.textContent = task.title
		ul.appendChild(li)
	});

	document.body.appendChild(ul)
}

getToDoList()

// Этот код использует функцию fetch() для выполнения асинхронного запроса к указанному URL. 
// Полученные данные затем обрабатываются и передаются в функцию showTasks(), 
// которая создает элементы списка и добавляет их на страницу.