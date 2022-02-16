import { Clear_Form } from './clear_modal.js';
import { Modal } from './show_modal.js';
import { CloseModal } from './close_modal.js';

// this class is for showing and closing the details_modal
export const View_Details = (function() {
	// add eventListener to the window for closing the modal
	window.addEventListener('click', windowsOnClick);

	function showModal() {
		Clear_Form(); // make sure to reset everything
		Modal.show("show-details");
	}	

	function windowsOnClick() {
		if (CloseModal(event, Modal.getModal()) == true)
			Modal.show("show-details");
	}

	return {
		showModal
	}
})();