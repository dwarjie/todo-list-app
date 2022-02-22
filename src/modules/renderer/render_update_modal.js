import { Modal } from '../top_navigation/show_modal.js';
import { Windows_Click_Event } from '../event/window_click_event.js';
// this render module will handle the rendering of modal for updating the todo item
// this will reuse the show-modal class element for adding todo
// but will change the innerHTML of the button from "Add" to "Update"

const updateButton = document.querySelector('#add-item');
export function Render_Update_Modal() {
	Modal.show("show-modal");
	updateButton.innerHTML = "Update";
	window.addEventListener('click', Windows_Click_Event);
}
