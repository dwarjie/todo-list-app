import { Event_Manager } from './event_manager.js';
// this module will handle the showing of details of each todo item
// and also adding event listener to all todo items once clicked

// this function is the main function for viewing details of the todo
function showDetails(e) {
	console.log(e.target.dataset.id);
}

export function Details_Event(elements) {
	// use event manager to add events to the buttons
	Event_Manager(elements, showDetails)
}