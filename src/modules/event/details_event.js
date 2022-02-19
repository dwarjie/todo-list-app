import { Event_Manager } from './event_manager.js';
import { Search } from '../data/search.js';
import { Populate_Details_Modal } from '../data/populate_details_modal.js';
import { View_Details } from '../view-details/view_details.js'
// this module will handle the showing of details of each todo item
// and also adding event listener to all todo items once clicked

let todoItem;
// this function is the main function for viewing details of the todo
function showDetails(e) {
	let id = e.target.dataset.id;
	const searchedItem = Search(id);
	todoItem = searchedItem.item;
	Populate_Details_Modal(todoItem);
	View_Details.showModal();
}

export function Details_Event(elements) {
	// use event manager to add events to the buttons
	Event_Manager(elements, showDetails)
}