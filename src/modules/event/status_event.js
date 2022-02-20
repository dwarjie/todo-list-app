import { Event_Manager } from "./event_manager.js";
import { Search } from '../data/search.js';
import { Inbox } from '../inbox/inbox.js';
import { Today } from '../today/today.js';
import { Personal } from '../personal/personal.js';
import { Save_Data } from '../data/save_data.js';
// this module will handle the adding of event listener for checkboxes in the todo
// using the Event Manager.
// this will update the todo status from "Finished" -> "Unfinished"

const projectTitle = document.querySelector('.project-title');
// this function is the main function for status events
function changeStatus(e) {
	e.stopImmediatePropagation(); // stop bubbling
	let id = e.target.dataset.id
	const searchedItem =  Search(id);
	let todoItem = searchedItem.item;
	updateStatus(todoItem);
	Save_Data();
	renderUpdated();
}

function updateStatus(item) {
	if (item.status == "undefined")
		return item.status = "finish"
	if (item.status == "finish") {}
		return item.status = "undefined"
}

// this function will call all the update function of every tab in order to 
// re-render the view todo
function renderUpdated() {
	// check what tab to re-render
	// re-render the view-todo
	if (projectTitle.innerHTML == "Inbox") return Inbox.update();
	if (projectTitle.innerHTML == "Today") return Today.update();
	Personal.update();
}

export function Status_Event(elements) {
	Event_Manager(elements, changeStatus);
}