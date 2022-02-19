// this module will populate the modal with the details of the todo item
const inputDueDate = document.querySelector('#details-due-date');
const inputTitle = document.querySelector('#details-title');
const inputDescription = document.querySelector('#details-description');

export function Populate_Details_Modal(todoItem) {
	inputDueDate.value = todoItem.due;
	inputTitle.value = todoItem.title;
	inputDescription.value = todoItem.desc;
}