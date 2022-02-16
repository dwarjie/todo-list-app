// this module will check if the user clicked outside the modal container
// and check if the modal container is the right one
// if true, close the modal

export function CloseModal(event, modalElement, modalClass) {
	if (event.target === modalElement && modalElement.classList[0] == modalClass)
		return true;
}