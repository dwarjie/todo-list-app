import { Event_Manager } from './event_manager.js';
// this will handle the adding of events to all update buttons in todo items

function updateTodo(e) {
	console.log('update')
}

export function Update_Event(elements) {
	// use event manager to add events to the buttons
	Event_Manager(elements, updateTodo)
}