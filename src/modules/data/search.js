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
	// call the searching module for the inbox and project
	const inboxKey = Search_Inbox(id, searchItem);	
	const projectKey = Search_Project(id, searchItem);
	console.log(inboxKey, projectKey)
};