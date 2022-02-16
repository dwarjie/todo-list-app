import { Clear_Form } from '../top_navigation/clear_modal.js';
import { Modal } from '../top_navigation/show_modal.js';
import { CloseModal } from '../top_navigation/close_modal.js';

// this class is for showing and closing the details_modal
export const View_Details = (function() {
	// add eventListener to the window for closing the modal
	window.addEventListener('click', windowsOnClick);

	function showModal() {
		Clear_Form(); // make sure to reset everything
		Modal.show("show-details");
	}	

	function windowsOnClick() {
		if (CloseModal(event, Modal.getModal(), Modal.getModal().classList[0]) == true)
			Modal.show("show-details");
	}

	return {
		showModal
	}
})();