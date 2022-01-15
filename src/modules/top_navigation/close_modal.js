// this module will check if the user clicked outside the modal container
// if true, close the modal

export function CloseModal(event, modalElement) {
	if (event.target === modalElement)
		return true;
}