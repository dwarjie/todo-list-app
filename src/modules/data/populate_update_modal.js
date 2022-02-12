// this module will handle the population of the update_modal
// from the gathered data from the search module

// get all the elements of the modal
const inputDueDate = document.querySelector('#modal-due-date');
const inputPriority = document.querySelector('#modal-priority');
const inputTitle = document.querySelector('#modal-title');
const inputDescription = document.querySelector('#modal-description');

export function Populate_Update_Modal(todoItem) {
	inputDueDate.value = todoItem.due;
	inputPriority.value = todoItem.priority;
	inputTitle.value = todoItem.title;
	inputDescription.value = todoItem.desc;
}