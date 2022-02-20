import { Event_Manager } from './event_manager.js';
import { Search } from '../data/search.js';
import { Get_Details } from '../add_todo/get_todo_details.js';
import { Populate_Update_Modal } from '../data/populate_update_modal.js';
import { Render_Update_Modal } from '../renderer/render_update_modal.js';
import { Inbox } from '../inbox/inbox.js';
import { Today } from '../today/today.js';
import { Personal } from '../personal/personal.js';
// this will handle the adding of events to all update buttons in todo items

let todoItem; // this will hold the specific todoItem
const projectTitle = document.querySelector('.project-title');
function updateTodo(e) {
	e.stopImmediatePropagation(); // to stop the event from bubbling
	let id = e.target.dataset.id;
	const searchedItem = Search(id);
	todoItem = searchedItem.item;
	Render_Update_Modal(); // show the update modal
	Populate_Update_Modal(todoItem);
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

// this function will access the searched item
// and update all of it's value
export function Update_Item() {
	const todoDetails = Get_Details(); // get the details of the update_modal
	todoItem.due = todoDetails.due;
	todoItem.priority = todoDetails.priority;
	todoItem.title = todoDetails.title;
	todoItem.desc = todoDetails.desc;

	renderUpdated();
}

export function Update_Event(elements) {
	// use event manager to add events to the buttons
	Event_Manager(elements, updateTodo)
}