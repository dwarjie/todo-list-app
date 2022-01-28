import { Current_Date } from '../date/current_date.js';
// this module will clear the value of all the form input
// in creating the todo item

const inputDueDate = document.querySelector('#modal-due-date');
const inputPriority = document.querySelector('#modal-priority');
const inputTitle = document.querySelector('#modal-title');
const inputDescription = document.querySelector('#modal-description');

export const Clear_Form = (function() {
	console.log('Cleared')
	inputDueDate.value = Current_Date;
	inputPriority.value = "high-priority";
	inputTitle.value = "";
	inputDescription.value = "";
})
