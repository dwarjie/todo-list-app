import { Event_Manager } from './event_manager.js';
// this will handle the adding of delete event to all todo list items

function deleteTodo(e) {
	console.log('deleted');	
}

export function Delete_Event(elements) {
	Event_Manager(elements, deleteTodo);
}