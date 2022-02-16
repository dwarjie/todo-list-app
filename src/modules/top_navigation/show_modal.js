// this module will toggle the class of the modal element
// in order the modal to show
const modal = document.querySelector('.modal');

export const Modal = (function() {
	let modal; // here the modal element will go

	function show(modalClass) {
		// check what modal to show
		// the get the element of the modal then toggle it's show class
		if (modalClass == "show-modal") 
			modal = document.querySelector('.modal');
		if (modalClass == "show-details") 
			modal = document.querySelector('.details-modal');

		modal.classList.toggle(modalClass);
	}

	function getModal() {
		return modal;
	}

	return {
		show,
		getModal
	}
})();
