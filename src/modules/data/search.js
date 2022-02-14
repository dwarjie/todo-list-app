import { Todo_Data } from './todo_data.js';
import { Search_Inbox } from './search_inbox.js';
import { Search_Project } from './search_project.js';
// this module will search for the specific todo item
// by the use of the id key that will be passed
// this will check every item and compare each id key
// once found, get the index and return it

// search through all objects and compare the item.id to id then return the index of the item
function searchItem(id, todoCollections) {
	for(const item of todoCollections) {
		if (item.id == id)
			return todoCollections.indexOf(item)
	}
	return -1;
}

export function Search(id) {
	let todoItem; // this will hold the searched item
	// call the searching module for the inbox and project
	const inboxKey = Search_Inbox(id, searchItem);	
	const { itemKey, projectKey }= Search_Project(id, searchItem);

	if (inboxKey != -1) {
		todoItem = Todo_Data.todoCollections.inbox[inboxKey];
	}
	if (itemKey != -1) {
		todoItem = Todo_Data.todoCollections.personal[projectKey][itemKey];
	}

	// return multiple values
	return {
		item: todoItem,
		inboxKey: inboxKey,
		itemKey: itemKey,
		projectKey: projectKey
	}
};