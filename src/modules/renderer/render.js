import { Todo_Container } from "../container/todo_container.js";
// this will let us render all the todo item collestions
// using the container

const todoList = document.querySelector('#todo-list');
export function Render_Todo(todoCollection) {
	// check if there's a value to the todoCollection object
	if (Object.keys(todoCollection).length != 0) {
		todoList.innerHTML = todoCollection.map((item) => {
			return Todo_Container(item);
		}).join(''); 
	}
}