import { Todo_Data } from '../data/todo_data.js';
import { Todo } from './todo.js';
// this module is for getting all the information from the modal

const inputDueDate = document.querySelector('#modal-due-date');
const inputPriority = document.querySelector('#modal-priority');
const inputTitle = document.querySelector('#modal-title');
const inputDescription = document.querySelector('#modal-description');
const cbStatus = document.querySelector('#cbStatus');

export function Get_Details() {	
	// call the function factory for making a todo item
	// then give the input values as a parameter
	return Todo(Todo_Data.getTodoId() ,inputTitle.value, inputDescription.value, inputDueDate.value, inputPriority.value, "undefined");
};