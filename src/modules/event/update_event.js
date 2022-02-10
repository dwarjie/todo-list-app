import { Event_Manager } from './event_manager.js';
// this will handle the adding of events to all update buttons in todo items

function updateTodo(e) {
	let id = e.target.dataset.id;
}

export function Update_Event(elements) {
	// use event manager to add events to the buttons
	Event_Manager(elements, updateTodo)
}