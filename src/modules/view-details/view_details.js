import { Clear_Form } from '../top_navigation/clear_modal.js';
import { Modal } from '../top_navigation/show_modal.js';
import { CloseModal } from '../top_navigation/close_modal.js';
import { Windows_Click_Event } from '../event/window_click_event.js';

// this class is for showing and closing the details_modal
export const View_Details = (function() {

	function showModal() {
		Clear_Form(); // make sure to reset everything
		Modal.show("show-details");
		// add eventListener to the window for closing the modal
		window.addEventListener('click', Windows_Click_Event);
	}	

	return {
		showModal
	}
})();
