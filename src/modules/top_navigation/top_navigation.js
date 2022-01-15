import { modal, Modal } from './show_modal.js';
import { CloseModal } from './close_modal.js';
// This module will handle the click event for the buttons in top navigation
// add button and the info button

const btnAddTodo = document.querySelector('#create-todo');
const btnShowInfo = document.querySelector('#show-info');

export const Top_Navigation = (function() {
	// add event listener to the buttons
	btnAddTodo.addEventListener('click', showModal);
	window.addEventListener('click', windowsOnClick);
	// btnShowInfo.addEventListener('click' showInformation);

	function showModal() {
		Modal('show-modal');
	}

	function windowsOnClick(event) {
		if (CloseModal(event, modal) == true)
			Modal('show-modal'); // toggle again in order to close it
	}
})();