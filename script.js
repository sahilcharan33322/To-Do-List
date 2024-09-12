const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', addTask);

function addTask() {
	const taskText = newTaskInput.value.trim();
	if (taskText) {
		const taskListItem = document.createElement('li');
		taskListItem.innerHTML = `
			<input type="checkbox" id="task-${taskText}">
			<span>${taskText}</span>
			<button type="button" class="delete-task">Delete</button>
		`;
		taskList.appendChild(taskListItem);
		newTaskInput.value = '';
	}
}

taskList.addEventListener('click', toggleTask);

function toggleTask(event) {
	if (event.target.type === 'checkbox') {
		const taskListItem = event.target.parentNode;
		taskListItem.classList.toggle('completed');
	} else if (event.target.classList.contains('delete-task')) {
		const taskListItem = event.target.parentNode;
		taskList.removeChild(taskListItem);
	}
}