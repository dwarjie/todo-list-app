import { Event_Manager } from "./event_manager.js";
// this module will handle the adding of event listener for checkboxes in the todo
// using the Event Manager.
// this will update the todo status from "Finished" -> "Unfinished"

// this function is the main function for status events
function changeStatus(e) {
	console.log(e.target.checked);
}

export function Status_Event(elements) {
	Event_Manager(elements, changeStatus);
}