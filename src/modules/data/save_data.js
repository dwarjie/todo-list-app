import { Todo_Data } from './todo_data.js';
// this module let's us save data to the localStorage

export function Save_Data() {
	const STORAGE_NAME = "todoCollections";
	const ID_NAME = "todoId";

	// access the saved object in the localStorage and save the todoCollections and id there
	localStorage.setItem(STORAGE_NAME, JSON.stringify(Todo_Data.todoCollections));
	localStorage.setItem(ID_NAME, Todo_Data.getId());
}