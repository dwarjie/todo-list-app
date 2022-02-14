import { Todo_Data } from '../data/todo_data.js';
import { Event_Manager } from './event_manager.js';
import { Search } from '../data/search.js';
import { Inbox } from '../inbox/inbox.js';
import { Today } from '../today/today.js';
import { Personal } from '../personal/personal.js';
// this will handle the adding of delete event to all todo list items

// this function will call all the update function of every tab in order to 
// re-render the view todo
function renderUpdated() {
	// check what tab to re-render
	// re-render the view-todo
	if (projectTitle.innerHTML == "Inbox") return Inbox.update();
	if (projectTitle.innerHTML == "Today") return Today.update();
	Personal.update();
}

const projectTitle = document.querySelector('.project-title');
function deleteTodo(e) {
	let id = e.target.dataset.id;
	// check if the todoItem is in Inbox or Project
	// True -> Inbox | False -> Personal
	let searchedItem = Search(id);
	if (searchedItem.inboxKey != -1)
		Todo_Data.todoCollections.inbox.splice(searchedItem.inboxKey,1);
	if (searchedItem.itemKey != -1)
		Todo_Data.todoCollections.personal[searchedItem.projectKey].splice(searchedItem.itemKey,1);
	console.log(Todo_Data.todoCollections)
	renderUpdated();
}

export function Delete_Event(elements) {
	Event_Manager(elements, deleteTodo);
}