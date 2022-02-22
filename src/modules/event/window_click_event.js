import { Modal } from '../top_navigation/show_modal.js';
import { CloseModal } from '../top_navigation/close_modal.js';
// this module will handle the click event for windows
// it's for closing all the modals

export function Windows_Click_Event() {
	const addModal = document.querySelector('.modal');
	const detailModal = document.querySelector('.details-modal');
	const infoModal = document.querySelector('.info-modal');

	if (CloseModal(event, Modal.getModal()) == true) {
		if (addModal.classList.length > 1) 
			return Modal.show("show-modal");
		if (detailModal.classList.length > 1)
			return Modal.show("show-details");
		if (infoModal.classList.length > 1)
			return Modal.show("show-info"); 
	}
}
