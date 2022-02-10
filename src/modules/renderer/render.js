import { Todo_Container } from "../container/todo_container.js";
import { Update_Event } from '../event/update_event.js';
import { Delete_Event } from '../event/delete_event.js';
// this will let us render all the todo item collestions
// using the container

const todoList = document.querySelector('#todo-list');
export function Render_Todo(todoCollection) {
	// check if the todoCollection is not undefined
	// check if there's a value to the todoCollection object
	if (todoCollection != undefined) {
		if (Object.keys(todoCollection).length != 0) {
			todoList.innerHTML += todoCollection.map((item) => {
				return Todo_Container(item);
			}).join(''); 

			// get all the update and delete buttons to add events
			let btnUpdateElements = document.querySelectorAll('#edit-todo');
			let btnDeleteElements = document.querySelectorAll('#delete-todo');
			// then call the event managers for update and delete
			Update_Event(btnUpdateElements);
			Delete_Event(btnDeleteElements);

		}
	}else {
		console.log('undefined');
	}
}