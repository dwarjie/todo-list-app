// this module will toggle the class of the modal element
// in order the modal to show
const modal = document.querySelector('.modal');

function Modal(modalClass) {
	modal.classList.toggle(modalClass);
}

export { modal, Modal };