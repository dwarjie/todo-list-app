import { Todo_Data } from './todo_data.js';
// this module will search in the project collection
// and will return the item index if found

export function Search_Project(id, searchFunc) {
	let itemKey = -1; // default (means, the item is still not found)
	let projectKey;
	for(const key of Object.keys(Todo_Data.todoCollections.personal)) {
		// if item keys != -1 stop the loop. (means, the item is found)
		if (itemKey != -1) break
		itemKey = searchFunc(id, Todo_Data.todoCollections.personal[key]);
		projectKey = key;
	}
	return { itemKey, projectKey };
}