import { Todo } from './todo.js';
// this module is for getting all the information from the modal

const inputDueDate = document.querySelector('#modal-due-date');
const inputPriority = document.querySelector('#modal-priority');
const inputTitle = document.querySelector('#modal-title');
const inputDescription = document.querySelector('#modal-description');

export function Get_Details() {	
	// call the function factory for making a todo item
	// then give the input values as a parameter
	return Todo(inputTitle.value, inputDescription.value, inputDueDate.value, inputPriority.value);
};