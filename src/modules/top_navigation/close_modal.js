// this module will check if the user clicked outside the modal container
// and check if the modal container is the right one
// if true, close the modal

export function CloseModal(event, modalElement) {
	if (event.target === modalElement)
		return true;
}