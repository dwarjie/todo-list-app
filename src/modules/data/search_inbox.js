import { Todo_Data } from './todo_data.js';
// this module will search in the inbox collection
// and will return the index of the item if foundd

export function Search_Inbox(id, searchFunc) {
	const itemKey = searchFunc(id, Todo_Data.todoCollections.inbox);
	return itemKey;
}