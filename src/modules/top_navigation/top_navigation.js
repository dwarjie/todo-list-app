import { Clear_Form } from './clear_modal.js';
import { Add_Todo } from '../add_todo/add_todo.js'
import { Modal } from './show_modal.js';
import { CloseModal } from './close_modal.js';
import { Windows_Click_Event } from '../event/window_click_event.js';
// This module will handle the click event for the buttons in top navigation
// add button and the info button

const btnAddTodo = document.querySelector('#create-todo');
const btnShowInfo = document.querySelector('#show-info');
const addButton = document.querySelector('#add-item'); // change the innerHTML to add. Might be changed because of update

export const Top_Navigation = (function() {
	// add event listener to the buttons
	btnAddTodo.addEventListener('click', showModal);
	btnShowInfo.addEventListener('click', showInfo);
	// btnShowInfo.addEventListener('click' showInformation);

	function showModal() {
		Clear_Form(); // make sure to reset everything
		addButton.innerHTML = "Add";
		Modal.show("show-modal");
		window.addEventListener('click', Windows_Click_Event);
	}

	function showInfo() {
		Modal.show("show-info");
		window.addEventListener('click', Windows_Click_Event);
	}
})();