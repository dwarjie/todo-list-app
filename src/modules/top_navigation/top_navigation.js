import { Add_Todo } from '../add_todo/add_todo.js';
import { Clear_Form } from './clear_modal.js';
import { modal, Modal } from './show_modal.js';
import { CloseModal } from './close_modal.js';
import { Set_Current_Date } from '../date/set_current_date.js';
// This module will handle the click event for the buttons in top navigation
// add button and the info button

const btnAddTodo = document.querySelector('#create-todo');
const btnShowInfo = document.querySelector('#show-info');
const addButton = document.querySelector('#add-item'); // change the innerHTML to add. Might be changed because of update

export const Top_Navigation = (function() {
	// add event listener to the buttons
	btnAddTodo.addEventListener('click', showModal);
	window.addEventListener('click', windowsOnClick);
	// btnShowInfo.addEventListener('click' showInformation);

	function showModal() {
		Clear_Form(); // make sure to reset everything
		addButton.innerHTML = "Add";
		Modal('show-modal');
	}

	function windowsOnClick(event) {
		if (CloseModal(event, modal) == true)
			Modal('show-modal'); // toggle again in order to close it
	}
})();