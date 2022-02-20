import { Todo_Data } from './todo_data.js';
import { Save_Data } from './save_data.js';
// this module let's us load the data of the todoCollection and todoId from localStorage
// if data does not exist in the localStorage create one

export function Load_Data() {
	// check if data does not exist from the localStorage
	if (localStorage.getItem('todoCollection') === null && localStorage.getItem('todoId') === null && localStorage.getItem('personalCollections') === null) {
		Todo_Data.todoCollections = Todo_Data.todoDefault;
		Todo_Data.setId = 1;
		Todo_Data.personalProjectCollection = {};
		Save_Data();
		return
	}
	// if it does exist
	Todo_Data.todoCollections = JSON.parse(localStorage.getItem('todoCollections'));
	Todo_Data.setId(parseInt(JSON.parse(localStorage.getItem('todoId'))));
	Todo_Data.personalProjectCollection = JSON.parse(localStorage.getItem('personalCollections'));
	Save_Data();
}