import { Current_Date } from './current_date.js';
// this module will be called once the program loaded.
// it will set the date for the html input with the current date

const dueDate = document.querySelector('#modal-due-date');
export const Set_Current_Date = (function() {
	dueDate.value = Current_Date;
	console.log('Date set!')
})();